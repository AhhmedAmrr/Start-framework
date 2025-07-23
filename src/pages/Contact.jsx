export default function Contact() {
  return (
    <div className="bg-white text-dark py-5 vh-100">
      <div className="container">
        <h2 className="text-center mt-5">CONTACT SECTION</h2>

        <form>
          <div className="mb-3">
            <label className="form-label">User Name</label>
            <input type="text" className="form-control" placeholder="Enter your name" />
          </div>

          <div className="mb-3">
            <label className="form-label">User Age</label>
            <input type="number" className="form-control" placeholder="Enter your age" />
          </div>

          <div className="mb-3">
            <label className="form-label">User Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>

          <div className="mb-4">
            <label className="form-label">User Password</label>
            <input type="password" className="form-control" placeholder="Enter your password" />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-success px-4">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  )
}
