const welcomeMailTemplate = (data) => {
    const { userName } = data;
    return (`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Next Skills 360</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    background-color: #ffffff;
                    margin: 50px auto;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    max-width: 600px;
                }
                .header {
                    background-color: #4CAF50;
                    color: #ffffff;
                    padding: 20px;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                    text-align: center;
                }
                .header h1 {
                    margin: 0;
                }
                .content {
                    padding: 20px;
                }
                .content h2 {
                    color: #333333;
                }
                .content p {
                    color: #666666;
                    line-height: 1.6;
                }
                .footer {
                    background-color: #f4f4f4;
                    color: #666666;
                    padding: 20px;
                    text-align: center;
                    border-bottom-left-radius: 10px;
                    border-bottom-right-radius: 10px;
                }
                .footer p {
                    margin: 0;
                }
                .button {
                    display: inline-block;
                    padding: 10px 20px;
                    margin: 20px 0;
                    background-color: #4CAF50;
                    color: #ffffff;
                    text-decoration: none;
                    border-radius: 5px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Welcome to Next Skills 360</h1>
                </div>
                <div class="content">
                    <h2>Hello ${data.name},</h2>
                    <p>Thank you for creating an account with us! We're excited to have you on board.</p>
                    <p>Next Skills 360 is a multiple-award-winning Edtech social enterprise that makes innovative and low-cost products for the students of our country, providing coding learning for students who don't have computers through the kit provided by them.</p>
                    <p>We're here to help you make the most out of our service. Feel free to explore and let us know if you have any questions.</p>
                    <p>Best Regards,<br>The Next Skills 360 Team</p>
                </div>
                <div class="footer">
                    <p>&copy; 2024 Next Skills 360. All rights reserved.</p>
                    <p>If you did not create this account, please contact us at <a href="mailto:support@nextskills360.com">support@nextskills360.com</a></p>
                </div>
            </div>
        </body>
        </html>
    `);
};

module.exports = welcomeMailTemplate;
