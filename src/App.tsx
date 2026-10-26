import { useState, useEffect } from 'react'

const products = [
  { model: 'SP25', dimension: '120 × 100 × 15 cm', staticLoad: '5.000 kg', dynamicLoad: '2.000 kg', access: '2 arah', image: '/top-sp25.png' },
  { model: 'SP16', dimension: '120 × 100 × 15 cm', staticLoad: '3.000 kg', dynamicLoad: '1.500 kg', access: '4 arah', image: '/top-sp16.png' },
  { model: 'GP15', dimension: '120 × 100 × 15 cm', staticLoad: '1.500 kg', dynamicLoad: '1.000 kg', access: '4 arah', image: '/top-gp15.png' },
]

const benefits = [
  ['01', 'Hemat Ruang', 'Memiliki desain nestable dan lebih hemat ruang saat disimpan.'],
  ['02', 'Ramah Lingkungan', 'Terbuat dari 100% plastik daur ulang dan dapat didaur ulang kembali.'],
  ['03', 'Tahan Lama', 'Kuat terhadap benturan, lembap, dan bahan kimia.'],
  ['04', 'Hemat Biaya', 'Masa pakai panjang, biaya operasional lebih rendah.'],
]

const gallerySlides = [
  {
    id: '01',
    title: 'Gudang & Stok Pallet',
    caption: 'Fasilitas penyimpanan terpadu dengan ketersediaan pallet plastik daur ulang siap distribusi.',
    image: '/hero-2.jpeg',
    alt: 'Gudang penyimpanan pallet plastik RAIB',
  },
  {
    id: '02',
    title: 'Penataan Rapi & Efisien',
    caption: 'Sistem penyimpanan nestable yang hemat ruang dan mempermudah operasional logistik industri.',
    image: '/hero-3.jpeg',
    alt: 'Susunan pallet rapi di gudang RAIB',
  },
  {
    id: '03',
    title: 'Lini Produksi Modern',
    caption: 'Area manufaktur dengan mesin berkapasitas tinggi untuk memenuhi kebutuhan volume besar.',
    image: '/hero-4.jpeg',
    alt: 'Fasilitas produksi pallet RAIB',
  },
  {
    id: '04',
    title: 'Kapasitas Logistik Teruji',
    caption: 'Kesiapan suplai berkelanjutan untuk berbagai sektor industri di Indonesia dan internasional.',
    image: '/hero-5.jpeg',
    alt: 'Area operasional logistik RAIB',
  },
  {
    id: '05',
    title: 'Proses Pencetakan Pallet',
    caption: 'Proses presisi tinggi dari material plastik daur ulang menjadi produk pallet berkualitas tinggi.',
    image: '/WhatsApp Image 2026-10-24 at 21.29.25.jpeg',
    alt: 'Proses produksi pallet RAIB',
  },
  {
    id: '06',
    title: 'Pengolahan Bahan Baku',
    caption: 'Pemilahan dan pemrosesan 100% material daur ulang dengan standar kualitas ketat.',
    image: '/WhatsApp Image 2026-10-24 at 21.29.25(1).jpeg',
    alt: 'Material daur ulang RAIB',
  },
  {
    id: '07',
    title: 'Kekuatan Struktur Optimal',
    caption: 'Struktur pallet dirancang kokoh untuk menahan beban statis hingga 5.000 kg secara aman.',
    image: '/WhatsApp Image 2026-10-24 at 21.29.25(2).jpeg',
    alt: 'Desain kekuatan pallet RAIB',
  },
  {
    id: '08',
    title: 'Standar Mutu Pabrikasi',
    caption: 'Pengawasan mutu menyeluruh pada setiap batch produksi demi menjaga performa jangka panjang.',
    image: '/WhatsApp Image 2026-10-24 at 21.29.25(3).jpeg',
    alt: 'Kontrol standar mutu pabrikasi RAIB',
  },
  {
    id: '09',
    title: 'Siap Distribusi Cepat',
    caption: 'Armada dan logistik siap mengirimkan pesanan pallet tepat waktu ke berbagai lokasi.',
    image: '/WhatsApp Image 2026-10-24 at 21.29.25(4).jpeg',
    alt: 'Kesiapan pengiriman pallet RAIB',
  },
  {
    id: '10',
    title: 'Akurasi Spesifikasi Teknis',
    caption: 'Dimensi presisi 120 × 100 cm yang kompatibel dengan forklift 2 arah maupun 4 arah.',
    image: '/WhatsApp Image 2026-10-24 at 21.29.25(5).jpeg',
    alt: 'Spesifikasi teknis pallet RAIB',
  },
  {
    id: '11',
    title: 'Inspeksi & Uji Durabilitas',
    caption: 'Pemeriksaan akhir menyeluruh untuk memastikan pallet bebas cacat dan tahan benturan.',
    image: '/WhatsApp Image 2026-10-24 at 21.29.28.jpeg',
    alt: 'Inspeksi akhir produk pallet RAIB',
  },
  {
    id: '12',
    title: 'Penyimpanan Skala Besar',
    caption: 'Kapasitas gudang luas untuk menampung ribuan pallet siap distribusi kapan saja.',
    image: '/WhatsApp Image 2026-10-25 at 08.21.36.jpeg',
    alt: 'Area penyimpanan pallet skala besar di gudang RAIB',
  },
  {
    id: '13',
    title: 'Stok Pallet Siap Kirim',
    caption: 'Penataan tumpukan pallet secara presisi untuk mempercepat alur pengambilan stok.',
    image: '/WhatsApp Image 2026-10-25 at 08.23.04.jpeg',
    alt: 'Susunan stok pallet siap kirim RAIB',
  },
  {
    id: '14',
    title: 'Uji Desain & Kaki Pallet',
    caption: 'Pemeriksaan struktur kaki dan lubang masuk forklift agar manuver pemindahan stabil.',
    image: '/WhatsApp Image 2026-10-25 at 08.25.53.jpeg',
    alt: 'Pemeriksaan struktur kaki pallet RAIB',
  },
  {
    id: '15',
    title: 'Proses Pemuatan Armada',
    caption: 'Kegiatan pemuatan langsung ke truk logistik untuk pengiriman cepat ke fasilitas pelanggan.',
    image: '/WhatsApp Image 2026-10-25 at 08.32.08.jpeg',
    alt: 'Proses muat pallet ke armada truk RAIB',
  },
  {
    id: '16',
    title: 'Efisiensi Muatan Transportasi',
    caption: 'Penyusunan optimal di dalam ruang kargo guna memaksimalkan volume pengiriman tanpa risiko rusak.',
    image: '/WhatsApp Image 2026-10-25 at 08.35.53.jpeg',
    alt: 'Penyusunan pallet dalam kargo truk RAIB',
  },
  {
    id: '17',
    title: 'Pengukuran & Kontrol Dimensi',
    caption: 'Pengukuran langsung oleh tim teknis guna memastikan setiap produk sesuai standar presisi.',
    image: '/WhatsApp Image 2026-10-25 at 08.49.04.jpeg',
    alt: 'Pengukuran dan kontrol dimensi pallet RAIB',
  },
]

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 6l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % gallerySlides.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [isPaused])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % gallerySlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + gallerySlides.length) % gallerySlides.length)

  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="RAIB home">
          <img src="/raib-pallets-logo.jpeg" alt="RAIB Pallets Logo" className="brand-logo" />
          <span style={{ fontSize: '16px' }}>RAIB Pallets</span>
        </a>
        <nav aria-label="Navigasi utama">
          <a href="#tentang">Tentang</a>
          <a href="#produk">Produk</a>
          <a href="#galeri">Galeri</a>
          <a href="#kontak">Kontak</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <img src="/hero-1.jpeg" alt="Gudang industri dengan susunan pallet" />
        <div className="hero-shade" />
        <div className="hero-content">
          {/* <p className="eyebrow light">Raib pallets· Since 2004</p> */}
          <h1>Pallet Plastik Berkualitas</h1>
          <div className="hero-bottom">
            <p>Pallet plastik daur ulang untuk rantai pasok yang bergerak lebih efisien.</p>
          </div>
        </div>
      </section>

      <section className="intro section" id="tentang">
        <div>
          <p className="eyebrow">PT. Leo Graha Sukses Primatama</p>
          <h2>Tentang Kami</h2>
        </div>
        <div className="intro-copy">
          <p>Beroperasi sejak 2004 di Kota Tangerang, kami berpengalaman dalam industri daur ulang kertas dan plastik untuk melayani berbagai kebutuhan sektor industri. Melalui proses produksi yang ramah lingkungan, kami menghadirkan pallet plastik berkelanjutan sebagai solusi hijau bagi masa depan industri.</p>
          <div className="stat-row">
            <div><strong>20+</strong><span>Tahun pengalaman</span></div>
            <div><strong>100%</strong><span>Material daur ulang</span></div>
            <div><strong>3</strong><span>Model unggulan</span></div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="benefits-heading">
          {/* <p className="eyebrow light">DIPRODUKSI untuk KEBUTUHAN INDUSTRI</p> */}
          <h2>Keunggulan Produk Kami</h2>
        </div>
        <div className="benefit-list">
          {benefits.map(([number, title, description]) => (
            <article className="benefit" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="products section" id="produk">
        <div className="section-title">
          <div>
            {/* <p className="eyebrow">Pallet RAIB</p> */}
            <h2>Produk Kami</h2>
          </div>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <article className="product-card" key={product.model}>
              <div className="product-top">
                <span>0{index + 1}</span>
              </div>
              <div className="product-visual">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={`Pallet Plastik RAIB ${product.model}`}
                    className="product-img"
                  />
                ) : (
                  <div className="pallet-visual" aria-hidden="true">
                    <i /><i /><i /><i /><i /><i /><i /><i /><i />
                  </div>
                )}
              </div>
              <h3>{product.model}</h3>
              <dl>
                <div><dt>Dimensi</dt><dd>{product.dimension}</dd></div>
                <div><dt>Kekuatan statis</dt><dd>{product.staticLoad}</dd></div>
                <div><dt>Kekuatan dinamis</dt><dd>{product.dynamicLoad}</dd></div>
                <div><dt>Akses forklift dan handpallet</dt><dd>{product.access}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery section" id="galeri">
        <div className="gallery-heading">
          <div>
            {/* <p className="eyebrow">Dokumentasi Operasional</p> */}
            <h2>Galeri</h2>
          </div>
          <p>Dokumentasi penanganan dan aktivitas pengiriman pallet plastik RAIB.</p>
        </div>

        <div
          className="gallery-slider-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="gallery-slider-viewport">
            <div
              className="gallery-slider-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {gallerySlides.map((slide) => (
                <div className="gallery-slider-slide" key={slide.id}>
                  <img src={slide.image} alt={slide.alt} />
                </div>
              ))}
            </div>

            <div className="slider-overlay-nav">
              <button
                type="button"
                onClick={prevSlide}
                className="slider-nav-btn"
                aria-label="Slide sebelumnya"
              >
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M13 15l-5-5 5-5" />
                </svg>
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="slider-nav-btn"
                aria-label="Slide berikutnya"
              >
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M7 5l5 5-5 5" />
                </svg>
              </button>
            </div>

            <div className="slider-progress-bar">
              {gallerySlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`slider-progress-segment ${idx === currentSlide ? 'active' : ''}`}
                  aria-label={`Pindah ke slide ${slide.id}`}
                />
              ))}
            </div>
          </div>

          <div className="gallery-slider-caption">
            <span className="slider-caption-num">{gallerySlides[currentSlide].id} / {String(gallerySlides.length).padStart(2, '0')}</span>
            
          </div>
        </div>
      </section>

      <section className="contact" id="kontak">
        {/* <p className="eyebrow light">Indonesia · International</p> */}
        <div className="contact-heading-group">
          <h2>Kontak Kami</h2>
        </div>

        <div className="contact-locations">
          <div className="location-item">
            <span>Kantor &amp; Pabrik</span>
            <p>Jl. Imam Bonjol No. 265 Km.3, Karawaci, Tangerang</p>
          </div>
          <div className="location-item">
            <span>Gudang</span>
            <p>Sempor, Candi Binangun, Sukorejo, Pasuruan</p>
          </div>
          <a
            href="https://wa.me/message/AX667SIO6F4FP1?src=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-wa-link"
            aria-label="Hubungi kami melalui WhatsApp"
          >
            <img
              src="/logos--whatsapp-icon.svg"
              alt="WhatsApp"
              className="contact-wa-icon"
            />
          </a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top" aria-label="RAIB home">
          <img src="/raib-pallets-logo.jpeg" alt="RAIB Pallets Logo" className="brand-logo" />
          <span>RAIB Pallets</span>
        </a>
        <p>Recycling At Its Best</p>
        <p>© 2026 PT. Leo Graha Sukses Primatama</p>
      </footer>
    </main>
  )
}
