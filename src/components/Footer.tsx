function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">Browse Puppies</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">Adoption Process</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">Find a Breeder</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">Our Mission</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">Puppy Care Tips</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">Breed Information</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">Training Guides</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="mb-2">Sign up for our newsletter to receive the latest puppy news and special offers.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Adorable Puppies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
