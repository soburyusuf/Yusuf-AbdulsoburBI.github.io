<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Yusuf Abdulsobur Olayiwola – Portfolio</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background-color: #0d1117;
      color: #e6edf3;
      line-height: 1.6;
    }
    header {
      background: #161b22;
      padding: 20px;
      text-align: center;
    }
    header h1 {
      margin: 0;
      font-size: 2.5rem;
    }
    header p {
      margin: 5px 0 0;
      font-size: 1.2rem;
      color: #58a6ff;
    }
    nav {
      text-align: center;
      background: #21262d;
      padding: 12px 0;
      position: sticky;
      top: 0;
      z-index: 1000;
    }
    nav a {
      color: #e6edf3;
      margin: 0 20px;
      text-decoration: none;
      font-weight: bold;
      font-size: 1.1rem;
    }
    nav a:hover {
      color: #58a6ff;
    }
    section {
      max-width: 850px;
      margin: 50px auto;
      padding: 0 20px;
    }
    h2 {
      border-bottom: 2px solid #30363d;
      padding-bottom: 8px;
      margin-bottom: 20px;
      font-size: 1.8rem;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      margin-bottom: 8px;
    }
    .project {
      background: #161b22;
      padding: 20px;
      margin-bottom: 25px;
      border-radius: 8px;
      transition: transform 0.2s;
    }
    .project:hover {
      transform: translateY(-5px);
    }
    .project h3 {
      margin-top: 0;
      font-size: 1.5rem;
      color: #58a6ff;
    }
    .project a {
      display: inline-block;
      margin-top: 10px;
      color: #58a6ff;
      text-decoration: none;
      font-weight: bold;
    }
    footer {
      text-align: center;
      padding: 20px;
      background: #161b22;
      margin-top: 50px;
      font-size: 0.9rem;
      color: #8b949e;
    }
    form input, form textarea {
      width: 100%;
      padding: 12px;
      margin-bottom: 12px;
      border: none;
      border-radius: 5px;
      background: #21262d;
      color: #e6edf3;
    }
    form button {
      background: #238636;
      color: #fff;
      border: none;
      padding: 12px 20px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
    }
    form button:hover {
      background: #2ea043;
    }
  </style>
</head>
<body>
  <header>
    <h1>Yusuf Abdulsobur Olayiwola</h1>
    <p>Data Analyst · BI Developer</p>
  </header>

  <nav>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </nav>

  <section id="about">
    <h2>About Me</h2>
    <p>Hello! I’m Yusuf Abdulsobur Olayiwola, a passionate Data Analyst and Business Intelligence Developer dedicated to transforming raw data into powerful insights. I specialize in SQL, Power BI, and Python, building dashboards and analytics solutions that empower businesses to make smarter, data-driven decisions.</p>
  </section>

  <section id="skills">
    <h2>Skills & Tools</h2>
    <ul>
      <li>📊 SQL – Data querying, ETL, and analysis</li>
      <li>📈 Power BI – Dashboard creation & data storytelling</li>
      <li>🐍 Python – Pandas, NumPy, Matplotlib, Machine Learning</li>
      <li>📂 Data Modeling & Visualization</li>
      <li>⚙️ Business Intelligence & Reporting Automation</li>
    </ul>
  </section>

  <section id="projects">
    <h2>Projects</h2>
    <div class="project">
      <h3>🚴‍♂️ Bike-Share Performance Dashboard</h3>
      <p>An interactive BI dashboard built with SQL Server and Power BI to analyze usage trends, customer behavior, and revenue metrics for a fictional bike-sharing company.</p>
      <a href="https://github.com/soburyusuf/Yusuf-Abdulsobur-Portfolio/tree/main/Bike-Share%20Dashboard" target="_blank">View Project →</a>
    </div>
    <div class="project">
      <h3>🛍️ Retail Sales SQL Project</h3>
      <p>Exploratory retail transaction analysis using SQL to uncover customer purchase patterns, revenue distribution, and category-level performance.</p>
      <a href="https://github.com/soburyusuf/Yusuf-Abdulsobur-Portfolio/tree/main/Retail_Sales_Sql_Project" target="_blank">View Project →</a>
    </div>
    <div class="project">
      <h3>🐟 Clarias Gariepinus Growth Prediction App</h3>
      <p>A machine learning application predicting catfish growth, leveraging Python and scikit-learn — developed as part of an aquaculture research project.</p>
      <a href="https://github.com/soburyusuf/Yusuf-Abdulsobur-Portfolio/tree/main/clarias-gariepinus-growth-prediction-app" target="_blank">View Project →</a>
    </div>
  </section>

  <section id="contact">
    <h2>Contact Me</h2>
    <p>Have a project in mind or want to collaborate? Let's connect!</p>
    <form action="https://formsubmit.co/YOUR_EMAIL_HERE" method="POST">
      <input type="text" name="name" placeholder="Your Name" required>
      <input type="email" name="email" placeholder="Your Email" required>
      <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>

  <footer>
    © 2025 Yusuf Abdulsobur Olayiwola — All Rights Reserved.
  </footer>
</body>
</html>
