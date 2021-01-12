import React from "react";

const LoginCheck = (_) => {
  return (
    // Login Checkin
    <div id="not-login">
      <div className="alertLogin">
        <h3>Eeiitss login dulu kak...</h3>
        <p>Silahkan login dengan akun line anda untuk mengakses profil</p>
        <p>
          <button id="liffLoginButton">Login</button>
        </p>
      </div>
    </div>
  );
};

export default LoginCheck;
