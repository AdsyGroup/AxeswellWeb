<?php
$pageTitle = "LOGIN";
include 'header.php'; ?>

<div class="login-container">
    <h2>LOGIN</h2>
    <div class="input-group">
        <label for="username">USERNAME</label>
        <input type="text" id="username" placeholder="Username">
    </div>
    <div class="input-group">
        <label for="password">PASSWORD</label>
        <input type="password" id="password" placeholder="Password">
    </div>
    <div class="input-group">
        <div class="ui checkbox">
            <input type="checkbox" id="rememberMe">
            <label for="rememberMe">Remember Me</label>
        </div>
    </div>
    <div class="button-container">
    <button type="button" id="btn-login" class="ui primary basic button">Login</button>
    </div>
    <a href="#" class="forgot-password">Forgot Password?</a>
</div>
</body>
<script type="text/javascript" src="../_Global/JS/index.js"></script>

</html>