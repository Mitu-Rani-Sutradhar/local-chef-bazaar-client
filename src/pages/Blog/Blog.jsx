const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Why Supporting Local Chefs Matters",
      date: "June 10, 2026",
      author: "Local Chef Bazaar Team",
      image:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba",
      description:
        "Supporting local chefs helps strengthen communities, promotes culinary diversity, and creates opportunities for talented food entrepreneurs."
    },
    {
      id: 2,
      title: "Top 5 Homemade Meals Loved by Our Customers",
      date: "June 8, 2026",
      author: "Local Chef Bazaar Team",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      description:
        "Discover the most popular homemade meals ordered through Local Chef Bazaar and why customers keep coming back for them."
    },
    {
      id: 3,
      title: "How to Choose the Perfect Meal Online",
      date: "June 5, 2026",
      author: "Food Expert",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      description:
        "Learn how ratings, ingredients, preparation time, and chef reviews can help you find the perfect meal for any occasion."
    },
    {
      id: 4,
      title: "Healthy Eating with Local Ingredients",
      date: "June 1, 2026",
      author: "Nutrition Specialist",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
      description:
        "Explore the benefits of fresh local ingredients and how local chefs create nutritious and delicious meals."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          Local Chef Bazaar Blog
        </h1>
        <p className="text-lg text-gray-500 max-w-3xl mx-auto">
          Food stories, chef insights, cooking tips, and community updates
          from Local Chef Bazaar.
        </p>
      </div>

      {/* Featured Blog */}
      <div className="hero bg-base-200 rounded-2xl mb-16">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
            className="max-w-lg rounded-xl shadow-lg"
            alt="Featured Blog"
          />

          <div>
            <h2 className="text-4xl font-bold mb-4">
              Bringing Homemade Food Closer to Everyone
            </h2>

            <p className="py-4 text-gray-600">
              At Local Chef Bazaar, we believe everyone deserves access to
              authentic homemade meals. Our platform connects passionate chefs
              with food lovers, creating a stronger local food community.
            </p>

           
          </div>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure>
              <img
                src={blog.image}
                alt={blog.title}
                className="h-60 w-full object-cover"
              />
            </figure>

            <div className="card-body">
              <div className="text-sm text-gray-500">
                {blog.date} • {blog.author}
              </div>

              <h2 className="card-title">
                {blog.title}
              </h2>

              <p className="text-gray-600">
                {blog.description}
              </p>

             
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      {/* <div className="mt-20 bg-base-200 rounded-2xl p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Stay Updated
        </h2>

        <p className="mb-6 text-gray-600">
          Subscribe to receive food stories, cooking tips, and updates from
          Local Chef Bazaar.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full md:w-96"
          />

          <button className="btn btn-primary">
            Subscribe
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Blog;