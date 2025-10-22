export default function loginHtml() {
    return ` <h1>Login Form </h1>
        </br>
        <form action="/submit" method="POST">
        <label>Email: <input type="email" name="email" required></label><br><br>
        <label>Password: <input type="password" name="name" required></label><br><br>
        <button type="submit">Submit</button>
        </form>
        
    <a href="/" >Go to Home</a>
        `;
}