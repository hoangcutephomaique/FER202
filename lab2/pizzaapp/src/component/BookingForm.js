import React from 'react';

function BookingForm() {
    return (
        <section className="container text-white">
            <h2 className="text-center mb-4">Book Your Table</h2>
            <form className="row g-3">
                <div className="col-md-4">
                    <input type="text" className="form-control" placeholder="Your Name *" required />
                </div>
                <div className="col-md-4">
                    <input type="email" className="form-control" placeholder="Your Email *" required />
                </div>
                <div className="col-md-4">
                    <select className="form-select" required>
                        <option>Select a Service</option>
                        <option>Dine In</option>
                        <option>Take Away</option>
                    </select>
                </div>
                <div className="col-12">
                    <textarea className="form-control" rows="4" placeholder="Please write your comment" />
                </div>
                <div className="col-12 text-start">
                    <button type="submit" className="btn btn-warning px-5 text-light">Send Message</button>
                </div>
            </form>
        </section>
    );
}

export default BookingForm;
