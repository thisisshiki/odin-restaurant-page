import { loadHome } from './home.js';

export function setupRegistration() {
    const registerBtn = document.getElementById('register-btn');
    const content = document.getElementById('content');

    const registrationForm = `
        <div id="registration-container" style="max-width: 400px; margin: 0 auto; padding: 20px;">
            <h2>User Registration</h2>
            <form id="register-form" novalidate>
                <div class="form-group" style="margin-bottom: 15px;">
                    <label for="email" style="display: block; margin-bottom: 5px;">Email</label>
                    <input type="email" id="email" required 
                        style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
                    <span class="error-message" style="color: red; font-size: 12px;"></span>
                </div>
                <div class="form-group" style="margin-bottom: 15px;">
                    <label for="password" style="display: block; margin-bottom: 5px;">Password</label>
                    <input type="password" id="password" required
                        style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
                    <span class="error-message" style="color: red; font-size: 12px;"></span>
                </div>
                <div class="form-group" style="margin-bottom: 15px;">
                    <label for="confirm-password" style="display: block; margin-bottom: 5px;">Confirm Password</label>
                    <input type="password" id="confirm-password" required
                        style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
                    <span class="error-message" style="color: red; font-size: 12px;"></span>
                </div>
                <button type="submit" style="padding: 10px 20px; background-color: #4CAF50; 
                    color: white; border: none; border-radius: 4px; cursor: pointer;">
                    Register
                </button>
            </form>
        </div>
    `;

    registerBtn.addEventListener('click', () => {
        content.innerHTML = registrationForm;
        setupFormValidation();
    });

    function setupFormValidation() {
        const form = document.getElementById('register-form');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm-password');

        // Add input validation listeners
        email.addEventListener('blur', () => validateField(email, isValidEmail));
        password.addEventListener('blur', () => validateField(password, isValidPassword));
        confirmPassword.addEventListener('blur', () => validateField(confirmPassword, isValidConfirmPassword));

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Validate all fields
            const isEmailValid = validateField(email, isValidEmail);
            const isPasswordValid = validateField(password, isValidPassword);
            const isConfirmValid = validateField(confirmPassword, isValidConfirmPassword);

            if (isEmailValid && isPasswordValid && isConfirmValid) {
                alert('Registration successful!');
                // Clear form and redirect to home after short delay
                setTimeout(() => {
                    content.innerHTML = '';
                    loadHome();
                }, 500);

                return true;
            }
            return false;
        });
    }

    function validateField(field, validationFn) {
        const errorSpan = field.nextElementSibling;
        const isValid = validationFn(field.value);
        
        if (!isValid.valid) {
            field.style.borderColor = 'red';
            errorSpan.textContent = isValid.message;
            return false;
        }
        
        field.style.borderColor = '#4CAF50';
        errorSpan.textContent = '';
        return true;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            return { valid: false, message: 'Email is required' };
        }
        if (!emailRegex.test(email)) {
            return { valid: false, message: 'Please enter a valid email address' };
        }
        return { valid: true, message: '' };
    }

    function isValidPassword(password) {
        if (!password) {
            return { valid: false, message: 'Password is required' };
        }
        if (password.length < 8) {
            return { valid: false, message: 'Password must be at least 8 characters' };
        }
        return { valid: true, message: '' };
    }

    function isValidConfirmPassword(confirmPassword) {
        const password = document.getElementById('password').value;
        if (!confirmPassword) {
            return { valid: false, message: 'Please confirm your password' };
        }
        if (confirmPassword !== password) {
            return { valid: false, message: 'Passwords do not match' };
        }
        return { valid: true, message: '' };
    }
}
