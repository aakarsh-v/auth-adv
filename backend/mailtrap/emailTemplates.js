export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
</head>
<body style="font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #222; max-width: 600px; margin: 0 auto; padding: 20px; background: #181f2a;">
  <div style="background: linear-gradient(90deg, #6366f1 0%, #06b6d4 100%); padding: 24px; text-align: center; border-radius: 12px 12px 0 0;">
    <h1 style="color: #fff; margin: 0; font-size: 2rem;">Verify Your Email</h1>
  </div>
  <div style="background-color: #232b3b; padding: 24px; border-radius: 0 0 12px 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.12);">
    <p style="color: #e0e7ef;">Hello,</p>
    <p style="color: #e0e7ef;">Thank you for signing up! Your verification code is:</p>
    <div style="text-align: center; margin: 32px 0;">
      <span style="font-size: 36px; font-weight: bold; letter-spacing: 6px; color: #06b6d4; background: #181f2a; padding: 12px 32px; border-radius: 8px; display: inline-block;">{verificationCode}</span>
    </div>
    <p style="color: #e0e7ef;">Enter this code on the verification page to complete your registration.</p>
    <p style="color: #e0e7ef;">This code will expire in 15 minutes for security reasons.</p>
    <p style="color: #e0e7ef;">If you didn't create an account with us, please ignore this email.</p>
    <p style="color: #e0e7ef;">Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #94a3b8; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
</head>
<body style="font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #222; max-width: 600px; margin: 0 auto; padding: 20px; background: #181f2a;">
  <div style="background: linear-gradient(90deg, #6366f1 0%, #06b6d4 100%); padding: 24px; text-align: center; border-radius: 12px 12px 0 0;">
    <h1 style="color: #fff; margin: 0; font-size: 2rem;">Password Reset Successful</h1>
  </div>
  <div style="background-color: #232b3b; padding: 24px; border-radius: 0 0 12px 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.12);">
    <p style="color: #e0e7ef;">Hello,</p>
    <p style="color: #e0e7ef;">We're writing to confirm that your password has been successfully reset.</p>
    <div style="text-align: center; margin: 32px 0;">
      <div style="background-color: #06b6d4; color: #fff; width: 56px; height: 56px; line-height: 56px; border-radius: 50%; display: inline-block; font-size: 2rem;">
        ✓
      </div>
    </div>
    <p style="color: #e0e7ef;">If you did not initiate this password reset, please contact our support team immediately.</p>
    <p style="color: #e0e7ef;">For security reasons, we recommend that you:</p>
    <ul style="color: #e0e7ef;">
      <li>Use a strong, unique password</li>
      <li>Enable two-factor authentication if available</li>
      <li>Avoid using the same password across multiple sites</li>
    </ul>
    <p style="color: #e0e7ef;">Thank you for helping us keep your account secure.</p>
    <p style="color: #e0e7ef;">Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #94a3b8; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
</head>
<body style="font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #222; max-width: 600px; margin: 0 auto; padding: 20px; background: #181f2a;">
  <div style="background: linear-gradient(90deg, #6366f1 0%, #06b6d4 100%); padding: 24px; text-align: center; border-radius: 12px 12px 0 0;">
    <h1 style="color: #fff; margin: 0; font-size: 2rem;">Password Reset</h1>
  </div>
  <div style="background-color: #232b3b; padding: 24px; border-radius: 0 0 12px 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.12);">
    <p style="color: #e0e7ef;">Hello,</p>
    <p style="color: #e0e7ef;">We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
    <p style="color: #e0e7ef;">To reset your password, click the button below:</p>
    <div style="text-align: center; margin: 32px 0;">
      <a href="{resetURL}" style="background-color: #6366f1; color: #fff; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 1rem; display: inline-block;">Reset Password</a>
    </div>
    <p style="color: #e0e7ef;">This link will expire in 1 hour for security reasons.</p>
    <p style="color: #e0e7ef;">Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #94a3b8; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome!</title>
</head>
<body style="font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #222; max-width: 600px; margin: 0 auto; padding: 20px; background: #181f2a;">
  <div style="background: linear-gradient(90deg, #6366f1 0%, #06b6d4 100%); padding: 24px; text-align: center; border-radius: 12px 12px 0 0;">
    <h1 style="color: #fff; margin: 0; font-size: 2rem;">Welcome Aboard!</h1>
  </div>
  <div style="background-color: #232b3b; padding: 24px; border-radius: 0 0 12px 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.12);">
    <p style="color: #e0e7ef;">Hello,</p>
    <p style="color: #e0e7ef;">We're excited to have you with us! 🎉</p>
    <p style="color: #e0e7ef;">You’re now part of a growing community that's on a mission to build amazing things.</p>
    <p style="color: #e0e7ef;">To get started, explore your dashboard, update your profile, and start engaging with the tools we’ve built just for you.</p>
    <div style="text-align: center; margin: 32px 0;">
      <a href="{dashboardURL}" style="background-color: #6366f1; color: #fff; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 1rem; display: inline-block;">Go to Dashboard</a>
    </div>
    <p style="color: #e0e7ef;">If you have any questions, feel free to reply to this email. We're here to help!</p>
    <p style="color: #e0e7ef;">Cheers,<br>The Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #94a3b8; font-size: 0.8em;">
    <p>This is an automated message. If you didn't sign up, you can safely ignore this email.</p>
  </div>
</body>
</html>
`;
