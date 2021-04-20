import cookies from 'js-cookie'

export default function ({ req, redirect }) {
    const token = process.client ? cookies.get('b_user') : req.cookies.b_user
    if (!token) {
        return redirect('/backend')
    }
}
