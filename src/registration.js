import { loadHome } from './home.js';

export function setupRegistration() {
    const registerBtn = document.getElementById('register-btn');
    const content = document.getElementById('content');

    const registrationForm = `
        <div id="registration-container">
            <h2>User Registration</h2>
            <form id="register-form" novalidate>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" required>
                    <span class="error-message"></span>
                </div>
                <div class="form-group">
                    <label for="country">Country</label>
                    <input type="text" id="country" required>
                    <span class="error-message"></span>
                </div>
                <div class="form-group">
                    <label for="zipcode">Zip Code</label>
                    <input type="text" id="zipcode" required>
                    <span class="error-message"></span>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" required>
                    <span class="error-message"></span>
                </div>
                <div class="form-group">
                    <label for="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" required>
                    <span class="error-message"></span>
                </div>
                <button type="submit">Register</button>
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
        const country = document.getElementById('country');
        const zipcode = document.getElementById('zipcode');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm-password');

        // Add input validation listeners
        email.addEventListener('blur', () => validateField(email, isValidEmail));
        country.addEventListener('blur', () => validateField(country, isValidCountry));
        zipcode.addEventListener('blur', () => validateField(zipcode, isValidZipcode));
        password.addEventListener('blur', () => validateField(password, isValidPassword));
        confirmPassword.addEventListener('blur', () => validateField(confirmPassword, isValidConfirmPassword));

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Validate all fields
            const isEmailValid = validateField(email, isValidEmail);
            const isCountryValid = validateField(country, isValidCountry);
            const isZipcodeValid = validateField(zipcode, isValidZipcode);
            const isPasswordValid = validateField(password, isValidPassword);
            const isConfirmValid = validateField(confirmPassword, isValidConfirmPassword);

            if (isEmailValid && isCountryValid && isZipcodeValid && isPasswordValid && isConfirmValid) {
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

    function isValidCountry(country) {
        if (!country) {
            return { valid: false, message: 'Country is required' };
        }
        if (country.length < 2) {
            return { valid: false, message: 'Country must be at least 2 characters' };
        }
        return { valid: true, message: '' };
    }

    function isValidZipcode(zipcode) {
        const zipcodeRegex = /^\d{5}(-\d{4})?$/;
        if (!zipcode) {
            return { valid: false, message: 'Zip Code is required' };
        }
        if (!zipcodeRegex.test(zipcode)) {
            return { valid: false, message: 'Please enter a valid zip code (e.g., 12345 or 12345-6789)' };
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
