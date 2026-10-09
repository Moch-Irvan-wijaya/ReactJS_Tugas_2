export default function(){
    return(
        <>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Best Seller</h1>
              <p className="lead text-muted">Kumpulan buku pengembangan diri yang paling banyak dicari. Cocok untuk kamu yang ingin berubah jadi lebih baik setiap hari.</p>
              <p>
                <a href="#book" className="btn btn-primary my-2 m-3">Views</a>
                <a href="#" className="btn btn-secondary my-2">Other Book</a>
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card h-100 shadow-sm">
                  <img src="/Atomic Habits.jpg" className="card-img-top p-3" alt="Atomic Habits" style={{ height: '350px', objectFit: 'contain' }} />
                  <div className="card-body">
                    <h5 className="card-title">Atomic Habits</h5>
                    <p className="text-muted mb-2">James Clear</p>
                    <p className="card-text">Cara mudah dan terbukti untuk membentuk kebiasaan baik dan menghilangkan kebiasaan buruk lewat perubahan kecil.</p>
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 shadow-sm">
                  <img src="/Deep Worok.jpg" className="card-img-top p-3" alt="Deep Work" style={{ height: '350px', objectFit: 'contain' }} />
                  <div className="card-body">
                    <h5 className="card-title">Deep Work</h5>
                    <p className="text-muted mb-2">Cal Newport</p>
                    <p className="card-text">Aturan untuk bisa fokus dan sukses di tengah dunia yang penuh gangguan.</p>
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 shadow-sm">
                  <img src="/Filosofi Teras.jpg" className="card-img-top p-3" alt="Filosofi Teras" style={{ height: '350px', objectFit: 'contain' }} />
                  <div className="card-body">
                    <h5 className="card-title">Filosofi Teras</h5>
                    <p className="text-muted mb-2">Henry Manampiring</p>
                    <p className="card-text">Filsafat Yunani-Romawi kuno untuk membangun mental yang tangguh di masa kini.</p>
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 shadow-sm">
                  <img src="/Grit.jpg" className="card-img-top p-3" alt="Grit" style={{ height: '350px', objectFit: 'contain' }} />
                  <div className="card-body">
                    <h5 className="card-title">Grit</h5>
                    <p className="text-muted mb-2">Angela Duckworth</p>
                    <p className="card-text">Kekuatan passion dan kegigihan sebagai kunci utama meraih kesuksesan.</p>
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 shadow-sm">
                  <img src="/How to friend.jpg" className="card-img-top p-3" alt="How to Win Friends and Influence People" style={{ height: '350px', objectFit: 'contain' }} />
                  <div className="card-body">
                    <h5 className="card-title">How to Win Friends &amp; Influence People</h5>
                    <p className="text-muted mb-2">Dale Carnegie</p>
                    <p className="card-text">Panduan klasik membangun relasi yang baik dan memengaruhi orang lain dengan cara yang positif.</p>
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 shadow-sm">
                  <img src="/Mindset.jpg" className="card-img-top p-3" alt="Mindset" style={{ height: '350px', objectFit: 'contain' }} />
                  <div className="card-body">
                    <h5 className="card-title">Mindset</h5>
                    <p className="text-muted mb-2">Carol S. Dweck</p>
                    <p className="card-text">Mengubah pola berpikir untuk perubahan besar dalam hidup.</p>
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 shadow-sm">
                  <img src="/Sebuah seni.jpg" className="card-img-top p-3" alt="Sebuah Seni untuk Bersikap Bodo Amat" style={{ height: '350px', objectFit: 'contain' }} />
                  <div className="card-body">
                    <h5 className="card-title">Sebuah Seni untuk Bersikap Bodo Amat</h5>
                    <p className="text-muted mb-2">Mark Manson</p>
                    <p className="card-text">Pendekatan yang waras demi menjalani hidup yang baik.</p>
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 shadow-sm">
                  <img src="/the 7 habits.jpg" className="card-img-top p-3" alt="The 7 Habits of Highly Effective People" style={{ height: '350px', objectFit: 'contain' }} />
                  <div className="card-body">
                    <h5 className="card-title">The 7 Habits of Highly Effective People</h5>
                    <p className="text-muted mb-2">Stephen R. Covey</p>
                    <p className="card-text">Pelajaran penting tentang perubahan diri untuk menjadi pribadi yang lebih efektif.</p>
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 shadow-sm">
                  <img src="/the psychology.jpg" className="card-img-top p-3" alt="The Psychology of Money" style={{ height: '350px', objectFit: 'contain' }} />
                  <div className="card-body">
                    <h5 className="card-title">The Psychology of Money</h5>
                    <p className="text-muted mb-2">Morgan Housel</p>
                    <p className="card-text">Pelajaran abadi tentang kekayaan, keserakahan, dan kebahagiaan.</p>
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        </>
    )
}