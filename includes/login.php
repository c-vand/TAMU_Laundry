<div class="wrapper">
    <div class="login-box">
        <h2>Login</h2>
        <form action="#">
            <div class="input-box">
                <input type="text" required>
                <label>Username</label>
            </div>
            <div class="input-box">
                <input type="password" required>
                <label>Password</label>
            </div>
            <div class="login-else">
                <label><input type="checkbox">Remember login</label>
                <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" class="btn">Login</button>
            <div class="new-accnt">
                <a href="#" class="register-link">Create an account?</a>
            </div>
        </form>
    </div>
    <div class="register-box">
        <h2>Register</h2>
        <form action="#">
            <div class="input-box">
                <input type="email" required>
                <label>Email*</label>
            </div>
            <div class="input-box">
                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
                <label>Phone Number(123-456-7890)</label>
            </div>
            <div class="input-box">
                <input type="text" required>
                <label>Username*</label>
            </div>
            <div class="input-box">
                <input type="password" required>
                <label>Password*</label>
            </div>
            <p>*required without notifications</p>
            <div class="login-else">
                <label><input type="checkbox">Text Notifications</label>
                <label><input type="checkbox">Agree to terms of service</label>
            </div>
            <button type="submit" class="btn">Register</button>
            <div class="new-accnt">
                <a href="#" class="login-link">Already have an account?</a>
            </div>
        </form>
    </div>
    <span class="close"><ion-icon name="close-outline"></ion-icon></span>
</div>