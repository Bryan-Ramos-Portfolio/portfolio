export const projects = [
    {
      prefix: "rootlink",
      images: ["/rootlink_logo.png", "/rootlink_pic.png"],
      width: 13,
      tech: [
        "TypeScript",
        "React.js",
        "Express.js",
        "Python",
        "SciKitLearn",
        "Flask",
      ],
      techimgs: [
        "/ts.png",
        "/react.png",
        "/node.png",
        "/python.png",
        "/flask.png",
        "sci.png",
      ],
      pics: ["/root1.png", "/root2.png", "/root3.png"],
      title:"A social media site that reunites lost family members",
      body: [" RootLink is committed to bridging the emotional and physical gaps between separated families, offering a secure platform for reconnection and healing.", " To achieve this, my team and I built RootLink using the PERN stack, with TypeScript for robust type checking and Zustand for efficient state management. Tailwind CSS ensures a responsive design, while SocketIO facilitates real-time messaging. I was also tasked with building secondary Flask server, powered by Python and Machine Learning, processes profile similarities."]
    },
    {
      prefix: "datastream",
      images: ["/datastream_logo.png", "/datastream_pic.png"],
      width: 10,
      tech: ["SQL", "Snowflake", "DBT", "fivetran", "google sheets"],
      techimgs: [
        "/sql.png",
        "/snowflake.png",
        "/dbt2.png",
        "/fivetran.png",
        "/gsheets.png",
      ],
      pics: ['data1.png', 'data2.png', 'data3.png'],
      title: "Analyzing Amazon sales data with A robust data Pipeline",
      body: ["Datastream is a data pipeline that analyzes Amazon sales data to drive smart business decisions. Using Snowflake as a data warehouse, Fivetran for data ingestion, and DBT for transforming raw data, Datastream creates DBT models and fact tables to answer key business intelligence questions like top-performing products and sales trends", "Integrated with Google Sheets for data entry, it provides comprehensive insights that help businesses optimize strategies, forecast demand, and improve profitability." ]
    },
    {
      prefix: "rentshift",
      images: ["/rentshift_logo.png", "/rentshift_pic.png"],
      width: 13,
      tech: ["React.js", "hmtl", "css", "javascript"],
      techimgs: ["/react.png", "/css.png", "/js.png", "leaflet.png" ],
      pics: ['rent1.png', 'rent2.png', 'rent3.png'],
      title: "A Web-app that vizualizes rental data and trends",
      body: ["RentShift visualizes rent data over the past few decades on an interactive heatmap, allowing users to explore how rents have changed across New York City. Users can select a range of years to compare rent differences over time, gaining insights into trends and patterns. ", "Built with React and utilizing Leaflet for map visualization, the app offers a seamless and engaging experience. The application features a stunning design, ensuring a visually appealing and user-friendly interface that enhances the overall experience."]
  
    },
    {
      prefix: "moviemetrics",
      images: ["/movie_logo.png", "/moviemetrics_pic.png"],
      width: 10,
      tech: ["React.js", "html", "css", "javascript"],
      techimgs: ["/react.png", "/html.png", "/css.png", "/js.png", "/charts.png"],
      pics: ['movie1.png', 'movie2.png', 'movie3.png'],
      title: "Comparing movie performance with data visualization",
      body: ['MovieMetrics is an application that enables users to visualize and compare movie data, such as box office performance and ratings. With API integration, users can easily search for any movie, add it to their list, and automatically populate detailed data, including photos and ratings. ', 'The app offers a seamless way to explore and analyze films, providing rich insights at a glance. Its user-friendly interface ensures that managing and comparing movie data is both intuitive and engaging.' ]
    },
  ];