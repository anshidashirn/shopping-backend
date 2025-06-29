export async function authMiddleware(req, res, next) {
    const token = await req.headers.token
    console.log(token)
    next()
}