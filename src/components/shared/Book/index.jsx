export default function Book() {
  return (
    <section className="py-5 container">
      <h2 className="fw-light text-center mb-4">Book</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100 shadow-sm">
            <img src="/Atomic Habits.jpg" className="card-img-top p-3" alt="Atomic Habits" style={{ height: "300px", objectFit: "contain" }} />
            <div className="card-body">
              <h5 className="card-title">Atomic Habits</h5>
              <p className="card-text text-muted">James Clear</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="fw-bold">Rp 95.000</span>
                <button className="btn btn-primary btn-sm">Beli</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow-sm">
            <img src="/Deep Worok.jpg" className="card-img-top p-3" alt="Deep Work" style={{ height: "300px", objectFit: "contain" }} />
            <div className="card-body">
              <h5 className="card-title">Deep Work</h5>
              <p className="card-text text-muted">Cal Newport</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="fw-bold">Rp 89.000</span>
                <button className="btn btn-primary btn-sm">Beli</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow-sm">
            <img src="/Filosofi Teras.jpg" className="card-img-top p-3" alt="Filosofi Teras" style={{ height: "300px", objectFit: "contain" }} />
            <div className="card-body">
              <h5 className="card-title">Filosofi Teras</h5>
              <p className="card-text text-muted">Henry Manampiring</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="fw-bold">Rp 78.000</span>
                <button className="btn btn-primary btn-sm">Beli</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow-sm">
            <img src="/Grit.jpg" className="card-img-top p-3" alt="Grit" style={{ height: "300px", objectFit: "contain" }} />
            <div className="card-body">
              <h5 className="card-title">Grit</h5>
              <p className="card-text text-muted">Angela Duckworth</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="fw-bold">Rp 85.000</span>
                <button className="btn btn-primary btn-sm">Beli</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow-sm">
            <img src="/How to friend.jpg" className="card-img-top p-3" alt="How to Win Friends and Influence People" style={{ height: "300px", objectFit: "contain" }} />
            <div className="card-body">
              <h5 className="card-title">How to Win Friends &amp; Influence People</h5>
              <p className="card-text text-muted">Dale Carnegie</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="fw-bold">Rp 82.000</span>
                <button className="btn btn-primary btn-sm">Beli</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow-sm">
            <img src="/Mindset.jpg" className="card-img-top p-3" alt="Mindset" style={{ height: "300px", objectFit: "contain" }} />
            <div className="card-body">
              <h5 className="card-title">Mindset</h5>
              <p className="card-text text-muted">Carol S. Dweck</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="fw-bold">Rp 90.000</span>
                <button className="btn btn-primary btn-sm">Beli</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow-sm">
            <img src="/Sebuah seni.jpg" className="card-img-top p-3" alt="Sebuah Seni untuk Bersikap Bodo Amat" style={{ height: "300px", objectFit: "contain" }} />
            <div className="card-body">
              <h5 className="card-title">Sebuah Seni untuk Bersikap Bodo Amat</h5>
              <p className="card-text text-muted">Mark Manson</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="fw-bold">Rp 79.000</span>
                <button className="btn btn-primary btn-sm">Beli</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow-sm">
            <img src="/the 7 habits.jpg" className="card-img-top p-3" alt="The 7 Habits of Highly Effective People" style={{ height: "300px", objectFit: "contain" }} />
            <div className="card-body">
              <h5 className="card-title">The 7 Habits of Highly Effective People</h5>
              <p className="card-text text-muted">Stephen R. Covey</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="fw-bold">Rp 99.000</span>
                <button className="btn btn-primary btn-sm">Beli</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow-sm">
            <img src="/the psychology.jpg" className="card-img-top p-3" alt="The Psychology of Money" style={{ height: "300px", objectFit: "contain" }} />
            <div className="card-body">
              <h5 className="card-title">The Psychology of Money</h5>
              <p className="card-text text-muted">Morgan Housel</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="fw-bold">Rp 92.000</span>
                <button className="btn btn-primary btn-sm">Beli</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}