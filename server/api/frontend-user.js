var md5 = require('md5')
var moment = require('moment')
var jwt = require('jsonwebtoken')

var mongoose = require('../mongoose')
var User = mongoose.model('User')

var config = require('../config')
var md5Pre = config.md5Pre
var secret = config.secretClient
var strlen = require('../utils').strlen
const general = require('./general')

const list = general.list
const modify = general.modify
const deletes = general.deletes
const recover = general.recover

exports.getList = (req, res) => {
    list(req, res, User)
}

/**
 * 用户登录
 * @method login
 * @param  {[type]}   req [description]
 * @param  {[type]}   res [description]
 * @return {[type]}       [description]
 */
exports.login = (req, res) => {
    var json = {},
        password = req.body.password,
        username = req.body.username
    if (username === '' || password === '') {
        json = {
            code: -200,
            message: '请输入用户名和密码'
        }
        res.json(json)
    }
    User.findOneAsync({
        username,
        password: md5(md5Pre + password),
        is_delete: 0
    }).then(result => {
        if (result) {
            var id = result._id
            var remember_me = 2592000000
            username = encodeURI(username)
            var token = jwt.sign({ id, username }, secret, { expiresIn: 60*60*24*30 })
            res.cookie('user', token, { maxAge: remember_me })
            res.cookie('userid', id, { maxAge: remember_me })
            res.cookie('username', username, { maxAge: remember_me })
            json = {
                code: 200,
                message: '登录成功',
                data: token
            }
        } else {
            json = {
                code: -200,
                message: '用户名或者密码错误'
            }
        }
        res.json(json)
    }).catch(err => {
        res.json({
            code: -200,
            message: err.toString()
        })
    })
}

/**
 * 微信登录
 * @method login
 * @param  {[type]}   req [description]
 * @param  {[type]}   res [description]
 * @return {[type]}       [description]
 */
exports.wxLogin = (req, res) => {
    let json = {}
    const { nickName, wxSignature, avatar } = req.body
    if (!nickName || !wxSignature) {
        json = {
            code: -200,
            message: '参数有误, 微信登录失败'
        }
        res.json(json)
    } else {
        User.findOneAsync({
            username: nickName,
            wx_signature: wxSignature,
            is_delete: 0
        }).then(result => {
            if (result) {
                var id = result._id
                var username = encodeURI(nickName)
                var token = jwt.sign({ id, username }, secret, { expiresIn: 60*60*24*30 })
                json = {
                    code: 200,
                    message: '登录成功',
                    data: {
                        user: token,
                        userid: id,
                        username,
                    }
                }
                res.json(json)
            } else {
                User.createAsync({
                    username: nickName,
                    password: '',
                    email: '',
                    creat_date: moment().format('YYYY-MM-DD HH:mm:ss'),
                    update_date: moment().format('YYYY-MM-DD HH:mm:ss'),
                    is_delete: 0,
                    timestamp: moment().format('X'),
                    wx_avatar: avatar,
                    wx_signature: wxSignature,
                }).then(_result => {
                    var username = encodeURI(nickName)
                    var id = _result._id
                    var token = jwt.sign({ id, username }, secret, { expiresIn: 60*60*24*30 })
                    res.json({
                        code: 200,
                        message: '注册成功!',
                        data: {
                            user: token,
                            userid: id,
                            username,
                        }
                    })
                }).catch(err => {
                    res.json({
                        code: -200,
                        message: err.toString()
                    })
                })
            }
        }).catch(err => {
            res.json({
                code: -200,
                message: err.toString()
            })
        })
    }
}


/**
 * 用户退出
 * @method logout
 * @param  {[type]}   req [description]
 * @param  {[type]}   res [description]
 * @return {[type]}       [description]
 */
exports.logout = (req, res) => {
    res.cookie('user', '', { maxAge: -1 })
    res.cookie('userid', '', { maxAge: -1 })
    res.cookie('username', '', { maxAge: -1 })
    res.json({
        code: 200,
        message: '退出成功',
        data: ''
    })
}

/**
 * 用户注册
 * @method insert
 * @param  {[type]}    req  [description]
 * @param  {[type]}    res  [description]
 * @param  {Function}  next [description]
 * @return {json}         [description]
 */
exports.insert = (req, res) => {
    var email = req.body.email,
        password = req.body.password,
        username = req.body.username

    if (!username || !password || !email) {
        res.json({
            code: -200,
            message: '请将表单填写完整'
        })
    } else if (strlen(username) < 4) {
        res.json({
            code: -200,
            message: '用户长度至少 2 个中文或 4 个英文'
        })
    } else if (strlen(password) < 8) {
        res.json({
            code: -200,
            message: '密码长度至少 8 位'
        })
    } else {
        User.findOneAsync({ username }).then(result => {
            if (result) {
                res.json({
                    code: -200,
                    message: '该用户名已经存在!'
                })
            } else {
                return User.createAsync({
                    username,
                    password: md5(md5Pre + password),
                    email,
                    creat_date: moment().format('YYYY-MM-DD HH:mm:ss'),
                    update_date: moment().format('YYYY-MM-DD HH:mm:ss'),
                    is_delete: 0,
                    timestamp: moment().format('X')
                }).then(() => {
                    res.json({
                        code: 200,
                        message: '注册成功!',
                        data: 'success'
                    })
                }).catch(err => {
                    res.json({
                        code: -200,
                        message: err.toString()
                    })
                })
            }
        }).catch(err => {
            res.json({
                code: -200,
                message: err.toString()
            })
        })
    }
}

exports.getItem = (req, res) => {
    var json, userid = req.query.id || req.cookies.userid || req.headers.userid
    User.findOneAsync({
        _id: userid,
        is_delete: 0
    }).then(result => {
        if (result) {
            json = {
                code: 200,
                data: result
            }
        } else {
            json = {
                code: -200,
                message: '请先登录, 或者数据错误'
            }
        }
        res.json(json)
    }).catch(err => {
        res.json({
            code: -200,
            message: err.toString()
        })
    })
}

/**
 * 用户编辑
 * @method modify
 * @param  {[type]}    req [description]
 * @param  {[type]}    res [description]
 * @return {[type]}        [description]
 */
exports.modify = (req, res) => {
    var _id = req.body.id,
        email = req.body.email,
        password = req.body.password,
        username = req.body.username
    var data = {
        email, username, update_date: moment().format('YYYY-MM-DD HH:mm:ss')
    }
    if (password) data.password = md5(md5Pre + password)
    modify(res, User, _id, data)
}


/**
 * 账号编辑
 * @method account
 * @param  {[type]}    req [description]
 * @param  {[type]}    res [description]
 * @return {[type]}        [description]
 */
exports.account = (req, res) => {
    var _id = req.body.id,
        email = req.body.email,
        user_id = req.cookies.userid || req.headers.userid,
        username = req.body.username || req.headers.username
    if (user_id === _id) {
        User.updateAsync({ _id }, { '$set': { email, username } }).then(() => {
            res.json({
                code: 200,
                message: '更新成功',
                data: 'success'
            })
        }).catch(err => {
            res.json({
                code: -200,
                message: err.toString()
            })
        })
    } else {
        res.json({
            code: -200,
            message: '当前没有权限'
        })
    }
}

/**
 * 密码编辑
 * @method password
 * @param  {[type]}    req [description]
 * @param  {[type]}    res [description]
 * @return {[type]}        [description]
 */
exports.password = (req, res) => {
    var _id = req.body.id,
        old_password = req.body.old_password,
        password = req.body.password,
        user_id = req.cookies.userid || req.headers.userid
    if (user_id === _id) {
        User.findOneAsync({
            _id,
            password: md5(md5Pre + old_password),
            is_delete: 0
        }).then(result => {
            if (result) {
                User.updateAsync({ _id }, { '$set': { password: md5(md5Pre + password) } }).then(() => {
                    res.json({
                        code: 200,
                        message: '更新成功',
                        data: 'success'
                    })
                }).catch(err => {
                    res.json({
                        code: -200,
                        message: err.toString()
                    })
                })
            } else {
                res.json({
                    code: -200,
                    message: '原始密码错误'
                })
            }
        })
    } else {
        res.json({
            code: -200,
            message: '当前没有权限'
        })
    }
}

/**
 * 用户删除
 * @method deletes
 * @param  {[type]}    req [description]
 * @param  {[type]}    res [description]
 * @return {[type]}        [description]
 */
exports.deletes = (req, res) => {
    deletes(req, res, User)
}

/**
 * 用户恢复
 * @method recover
 * @param  {[type]}    req [description]
 * @param  {[type]}    res [description]
 * @return {[type]}        [description]
 */
exports.recover = (req, res) => {
    recover(req, res, User)
}
