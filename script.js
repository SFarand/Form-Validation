const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

function showError(input, message) {
    const field = input.parentElement;
    field.className = "field error";
    field.querySelector("small").innerText = message;
}

function showSuccess(input) {
    const field = input.parentElement;
    field.className = "field success";
    field.querySelector("small").innerText = "";
}

function checkUsername() {
    if (username.value.trim() === "") {
        showError(username, "نام کاربری را وارد کنید");
        return false;
    } else if (username.value.trim().length < 3) {
        showError(username, "نام کاربری حداقل ۳ حرف باشد");
        return false;
    }
    showSuccess(username);
    return true;
}

function checkEmail() {
    if (email.value.trim() === "") {
        showError(email, "ایمیل را وارد کنید");
        return false;
    } else if (!email.value.includes("@") || !email.value.includes(".")) {
        showError(email, "ایمیل معتبر نیست");
        return false;
    }
    showSuccess(email);
    return true;
}

function checkPassword() {
    if (password.value === "") {
        showError(password, "رمز عبور را وارد کنید");
        return false;
    } else if (password.value.length < 6) {
        showError(password, "رمز عبور حداقل ۶ کاراکتر باشد");
        return false;
    }
    showSuccess(password);
    return true;
}

function checkPassword2() {
    if (password2.value === "") {
        showError(password2, "تکرار رمز عبور را وارد کنید");
        return false;
    } else if (password2.value !== password.value) {
        showError(password2, "رمز عبور و تکرار آن یکسان نیست");
        return false;
    }
    showSuccess(password2);
    return true;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isUsernameOk = checkUsername();
    let isEmailOk = checkEmail();
    let isPasswordOk = checkPassword();
    let isPassword2Ok = checkPassword2();

    if (isUsernameOk && isEmailOk && isPasswordOk && isPassword2Ok) {
        alert("ثبت نام با موفقیت انجام شد");
    }
});