import cookies from 'js-cookie'

export default function({ req, redirect }) {
    const token = process.client ? cookies.get('user') : req.cookies.user
    if (!token) {
        return redirect('/')
    }
}
