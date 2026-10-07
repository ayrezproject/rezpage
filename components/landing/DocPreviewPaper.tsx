'use client';

import { CheckSquare, Square, CheckCircle2 } from 'lucide-react';

export function DocPreviewPaper() {
  return (
    <div className="mt-3 rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-900/50 p-2 sm:p-5 shadow-inner">
      <div className="mx-auto max-w-4xl bg-white text-[#121316] p-5 sm:p-10 rounded-xl shadow-lg border border-neutral-200 text-xs sm:text-[13px] leading-relaxed font-sans">
        {/* Document Header Title */}
        <div className="text-center mb-6 pb-4 border-b-2 border-[#121316] space-y-1">
          <h2 className="text-base sm:text-xl font-black uppercase tracking-tight text-[#121316]">
            RENCANA PELAKSANAAN
          </h2>
          <h3 className="text-base sm:text-xl font-black uppercase tracking-tight text-[#121316]">
            PEMBELAJARAN MENDALAM
          </h3>
          <div className="inline-flex items-center gap-2 mt-1 px-3 py-0.5 rounded-full bg-neutral-100 border border-neutral-300 text-[11px] font-semibold text-neutral-600">
            <span>Standar Baku F4 (Folio 215 mm × 330 mm)</span>
            <span>•</span>
            <span>Kurikulum Merdeka SMK</span>
          </div>
        </div>

        {/* Comprehensive 54-Row Authentic Table from RPM.docx */}
        <div className="overflow-x-auto border border-neutral-300 rounded-lg">
          <table className="w-full border-collapse text-left text-xs sm:text-[12.5px]">
            <tbody>
              {/* BAGIAN 1: IDENTITAS */}
              <tr className="border-b border-neutral-300 bg-neutral-100 font-bold">
                <td colSpan={4} className="p-2 sm:p-2.5 text-[#121316] uppercase tracking-wide">
                  I. IDENTITAS MODUL
                </td>
              </tr>
              <tr className="border-b border-neutral-200">
                <td className="p-2 sm:p-2.5 font-bold w-1/4 bg-neutral-50/70 border-r border-neutral-200">Nama Satuan Pendidikan</td>
                <td className="p-2 sm:p-2.5 font-medium" colSpan={3}>SMK Negeri 1 Jogonalan</td>
              </tr>
              <tr className="border-b border-neutral-200">
                <td className="p-2 sm:p-2.5 font-bold bg-neutral-50/70 border-r border-neutral-200">Mata Pelajaran</td>
                <td className="p-2 sm:p-2.5 font-medium" colSpan={3}>Konsentrasi Keahlian Teknik Komputer dan Jaringan</td>
              </tr>
              <tr className="border-b border-neutral-200">
                <td className="p-2 sm:p-2.5 font-bold bg-neutral-50/70 border-r border-neutral-200">Nama Guru Pengampu</td>
                <td className="p-2 sm:p-2.5 font-semibold text-[#121316]" colSpan={3}>Zainal Mustofa, S.Kom</td>
              </tr>
              <tr className="border-b border-neutral-200">
                <td className="p-2 sm:p-2.5 font-bold bg-neutral-50/70 border-r border-neutral-200">Kelas / Semester</td>
                <td className="p-2 sm:p-2.5" colSpan={3}>Fase F / Kelas XI SMK</td>
              </tr>
              <tr className="border-b border-neutral-300">
                <td className="p-2 sm:p-2.5 font-bold bg-neutral-50/70 border-r border-neutral-200">Alokasi Waktu</td>
                <td className="p-2 sm:p-2.5" colSpan={3}>2 JP (2 x 45 Menit)</td>
              </tr>

              {/* BAGIAN 2: IDENTIFIKASI & DIFERENSIASI */}
              <tr className="border-b border-neutral-300 bg-neutral-100 font-bold">
                <td colSpan={4} className="p-2 sm:p-2.5 text-[#121316] uppercase tracking-wide">
                  II. IDENTIFIKASI KARAKTERISTIK PESERTA DIDIK
                </td>
              </tr>

              {/* Kesiapan Belajar */}
              <tr className="border-b border-neutral-200 bg-neutral-50/50">
                <td className="p-2 sm:p-2.5 font-bold border-r border-neutral-200 align-top" rowSpan={2}>
                  Kesiapan Belajar
                </td>
                <td className="p-2 sm:p-2.5 font-semibold text-amber-900 bg-amber-50/60 border-r border-neutral-200 w-1/4">
                  Belum Siap (6 Siswa)
                </td>
                <td className="p-2 sm:p-2.5 font-semibold text-blue-900 bg-blue-50/60 border-r border-neutral-200 w-1/3">
                  Siap (24 Siswa)
                </td>
                <td className="p-2 sm:p-2.5 font-semibold text-emerald-900 bg-emerald-50/60">
                  Sangat Siap (6 Siswa)
                </td>
              </tr>
              <tr className="border-b border-neutral-300">
                <td className="p-2 sm:p-2.5 text-neutral-700 border-r border-neutral-200 text-[11.5px] leading-relaxed">
                  Memerlukan bimbingan intensif dan analogi bertahap (<em>scaffolding</em>) terkait materi prasyarat Konfigurasi Routing Statis Multi-Router pada RouterOS MikroTik.
                </td>
                <td className="p-2 sm:p-2.5 text-neutral-700 border-r border-neutral-200 text-[11.5px] leading-relaxed">
                  Mampu mengikuti pembelajaran reguler dan mempraktikkan prosedur kerja Konfigurasi Routing Statis Multi-Router pada RouterOS MikroTik secara mandiri.
                </td>
                <td className="p-2 sm:p-2.5 text-neutral-700 text-[11.5px] leading-relaxed">
                  Mampu belajar mandiri, menganalisis studi kasus kompleks terkait Konfigurasi Routing Statis Multi-Router pada RouterOS MikroTik, dan bertindak sebagai tutor sebaya.
                </td>
              </tr>

              {/* Minat */}
              <tr className="border-b border-neutral-200 bg-neutral-50/50">
                <td className="p-2 sm:p-2.5 font-bold border-r border-neutral-200 align-top" rowSpan={2}>
                  Pemetaan Minat
                </td>
                <td className="p-2 sm:p-2.5 font-semibold border-r border-neutral-200">Teknik & Jaringan</td>
                <td className="p-2 sm:p-2.5 font-semibold border-r border-neutral-200">Sains & Komputasi</td>
                <td className="p-2 sm:p-2.5 font-semibold">Humaniora & Etika</td>
              </tr>
              <tr className="border-b border-neutral-300">
                <td className="p-2 sm:p-2.5 text-neutral-700 border-r border-neutral-200 text-[11.5px] leading-relaxed">
                  Fokus teknis spesifik konfigurasi dan troubleshooting Routing Statis Multi-Router MikroTik pada praktik kerja industri dan rekayasa terapan.
                </td>
                <td className="p-2 sm:p-2.5 text-neutral-700 border-r border-neutral-200 text-[11.5px] leading-relaxed">
                  Eksplorasi prinsip fisis, komputasi logis, dan analisis ilmiah routing pada bidang Jaringan, Cloud, & DevOps.
                </td>
                <td className="p-2 sm:p-2.5 text-neutral-700 text-[11.5px] leading-relaxed">
                  Penerapan etika profesi, komunikasi tim, kepatuhan SOP/K3, dan dampak sosial lingkungan kegiatan lab.
                </td>
              </tr>

              {/* Bakat & Modalitas */}
              <tr className="border-b border-neutral-200 bg-neutral-50/50">
                <td className="p-2 sm:p-2.5 font-bold border-r border-neutral-200 align-top" rowSpan={2}>
                  Bakat & Modalitas
                </td>
                <td className="p-2 sm:p-2.5 font-semibold border-r border-neutral-200">Visual (14 Siswa)</td>
                <td className="p-2 sm:p-2.5 font-semibold border-r border-neutral-200">Auditori (12 Siswa)</td>
                <td className="p-2 sm:p-2.5 font-semibold">Kinestetik (10 Siswa)</td>
              </tr>
              <tr className="border-b border-neutral-300">
                <td className="p-2 sm:p-2.5 text-neutral-700 border-r border-neutral-200 text-[11.5px]">
                  Cepat memahami skematik topologi, jobsheet bergambar, dan video demonstrasi konfigurasi.
                </td>
                <td className="p-2 sm:p-2.5 text-neutral-700 border-r border-neutral-200 text-[11.5px]">
                  Optimal melalui penjelasan lisan guru, diskusi tanya-jawab kelompok, dan telaah naratif.
                </td>
                <td className="p-2 sm:p-2.5 text-neutral-700 text-[11.5px]">
                  Sangat efektif menyerap materi melalui simulasi fisik langsung, perakitan perangkat, dan praktikum bengkel/lab.
                </td>
              </tr>

              {/* Profil Belajar (Strategi Diferensiasi) */}
              <tr className="border-b border-neutral-200 bg-neutral-50/50">
                <td className="p-2 sm:p-2.5 font-bold border-r border-neutral-200 align-top" rowSpan={2}>
                  Strategi Diferensiasi
                </td>
                <td className="p-2 sm:p-2.5 font-semibold border-r border-neutral-200">Diferensiasi Visual</td>
                <td className="p-2 sm:p-2.5 font-semibold border-r border-neutral-200">Diferensiasi Auditori</td>
                <td className="p-2 sm:p-2.5 font-semibold">Diferensiasi Kinestetik</td>
              </tr>
              <tr className="border-b border-neutral-300">
                <td className="p-2 sm:p-2.5 text-neutral-700 border-r border-neutral-200 text-[11.5px]">
                  Penyediaan modul ajar bergambar, simulasi interaktif, dan video tutorial demonstrasi RouterOS MikroTik.
                </td>
                <td className="p-2 sm:p-2.5 text-neutral-700 border-r border-neutral-200 text-[11.5px]">
                  Diskusi tanya-jawab interaktif, pemutaran rekaman materi, dan ulasan lisan instruksi kerja.
                </td>
                <td className="p-2 sm:p-2.5 text-neutral-700 text-[11.5px]">
                  Praktikum mandiri di bengkel/lab, perakitan alat peraga router fisik, dan eksperimen pengujian kabel/port.
                </td>
              </tr>

              {/* Karakteristik Mapel */}
              <tr className="border-b border-neutral-200">
                <td className="p-2 sm:p-2.5 font-bold bg-neutral-50/70 border-r border-neutral-200">Jenis Pengetahuan</td>
                <td className="p-2 sm:p-2.5" colSpan={3}>Konseptual dan Prosedural</td>
              </tr>
              <tr className="border-b border-neutral-200">
                <td className="p-2 sm:p-2.5 font-bold bg-neutral-50/70 border-r border-neutral-200">Relevansi Kehidupan Nyata</td>
                <td className="p-2 sm:p-2.5" colSpan={3}>
                  Penerapan langsung kompetensi Konfigurasi Routing Statis Multi-Router pada standar operasional industri TKJ, peningkatan efisiensi kerja di lab, dan kesiapan dunia kerja (DUDI).
                </td>
              </tr>
              <tr className="border-b border-neutral-200">
                <td className="p-2 sm:p-2.5 font-bold bg-neutral-50/70 border-r border-neutral-200">Tingkat Kesulitan & Integrasi Nilai</td>
                <td className="p-2 sm:p-2.5" colSpan={3}>
                  Tingkat: <span className="font-semibold text-neutral-900">Sedang</span> | Karakter: <span className="font-semibold text-neutral-900">Bernalar Kritis, Kolaborasi</span>
                </td>
              </tr>

              {/* Dimensi Profil Lulusan (DPL Checkboxes) */}
              <tr className="border-b border-neutral-300">
                <td className="p-2 sm:p-2.5 font-bold bg-neutral-50/70 border-r border-neutral-200 align-top">
                  Dimensi Profil Lulusan
                </td>
                <td className="p-2 sm:p-2.5" colSpan={3}>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <div className="flex items-center gap-1.5 opacity-60">
                      <Square className="h-3.5 w-3.5 text-neutral-400" />
                      <span>DPL 1 Beriman & Bertaqwa</span>
                    </div>
                    <div className="flex items-center gap-1.5 opacity-60">
                      <Square className="h-3.5 w-3.5 text-neutral-400" />
                      <span>DPL 2 Kewargaan</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-bold text-[#121316]">
                      <CheckSquare className="h-3.5 w-3.5 text-emerald-600" />
                      <span>DPL 3 Penalaran Kritis</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-bold text-[#121316]">
                      <CheckSquare className="h-3.5 w-3.5 text-emerald-600" />
                      <span>DPL 4 Kreativitas</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-bold text-[#121316]">
                      <CheckSquare className="h-3.5 w-3.5 text-emerald-600" />
                      <span>DPL 5 Kolaborasi</span>
                    </div>
                    <div className="flex items-center gap-1.5 opacity-60">
                      <Square className="h-3.5 w-3.5 text-neutral-400" />
                      <span>DPL 6 Kemandirian</span>
                    </div>
                    <div className="flex items-center gap-1.5 opacity-60">
                      <Square className="h-3.5 w-3.5 text-neutral-400" />
                      <span>DPL 7 Kesehatan</span>
                    </div>
                    <div className="flex items-center gap-1.5 opacity-60">
                      <Square className="h-3.5 w-3.5 text-neutral-400" />
                      <span>DPL 8 Komunikasi</span>
                    </div>
                  </div>
                </td>
              </tr>

              {/* BAGIAN 3: DESAIN PEMBELAJARAN */}
              <tr className="border-b border-neutral-300 bg-neutral-100 font-bold">
                <td colSpan={4} className="p-2 sm:p-2.5 text-[#121316] uppercase tracking-wide">
                  III. DESAIN PEMBELAJARAN
                </td>
              </tr>
              <tr className="border-b border-neutral-200">
                <td className="p-2 sm:p-2.5 font-bold bg-neutral-50/70 border-r border-neutral-200 align-top">Capaian Pembelajaran (CP)</td>
                <td className="p-2 sm:p-2.5 text-neutral-800" colSpan={3}>
                  Pada akhir Fase F, peserta didik mampu merencanakan topologi jaringan, memasang perangkat jaringan, mengonfigurasi routing statis dan dinamis pada router MikroTik, serta memecahkan masalah (<em>troubleshooting</em>) konektivitas internet pada jaringan lokal dan luas.
                </td>
              </tr>
              <tr className="border-b border-neutral-200">
                <td className="p-2 sm:p-2.5 font-bold bg-neutral-50/70 border-r border-neutral-200 align-top">Tujuan Pembelajaran (TP)</td>
                <td className="p-2 sm:p-2.5 space-y-1.5 text-neutral-800" colSpan={3}>
                  <div className="flex items-start gap-1.5">
                    <span className="font-bold">1.</span>
                    <span>Peserta didik dapat menganalisis tabel rute dan gateway pada topologi multi-router dengan teliti.</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="font-bold">2.</span>
                    <span>Melalui praktikum lab, peserta didik mampu mengonfigurasi IP address dan default static route (0.0.0.0/0) pada MikroTik RouterOS sesuai prosedur standar operasi (SOP).</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="font-bold">3.</span>
                    <span>Peserta didik mampu melakukan pengujian koneksi antarcabang (ping, traceroute) dan menganalisis penyebab kegagalan rute jaringan secara kritis.</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-neutral-200">
                <td className="p-2 sm:p-2.5 font-bold bg-neutral-50/70 border-r border-neutral-200">Pedagogi & Kemitraan</td>
                <td className="p-2 sm:p-2.5" colSpan={3}>
                  <strong>Model:</strong> Problem-Based Learning (PBL) | <strong>Metode:</strong> Eksperimen Lab | <strong>Mitra:</strong> DUDI Industri & Komunitas Praktisi
                </td>
              </tr>
              <tr className="border-b border-neutral-300">
                <td className="p-2 sm:p-2.5 font-bold bg-neutral-50/70 border-r border-neutral-200">Pemanfaatan Digital</td>
                <td className="p-2 sm:p-2.5" colSpan={3}>
                  Canva & Silabus Elektronik (Perencanaan) • Video Tutorial/Simulasi (Pelaksanaan) • Google Forms & Quizizz (Asesmen)
                </td>
              </tr>

              {/* BAGIAN 4: PENGALAMAN BELAJAR (Mindful, Meaningful, Joyful) */}
              <tr className="border-b border-neutral-300 bg-neutral-100 font-bold">
                <td colSpan={4} className="p-2 sm:p-2.5 text-[#121316] uppercase tracking-wide">
                  IV. PENGALAMAN BELAJAR (LANGKAH-LANGKAH AKTIVITAS)
                </td>
              </tr>
              <tr className="border-b border-neutral-200">
                <td className="p-2 sm:p-2.5 font-bold bg-neutral-50/70 border-r border-neutral-200 align-top">
                  Tahap Awal (Pendahuluan)
                  <div className="mt-1 flex items-center gap-1 text-[10px] text-emerald-700 font-semibold">
                    <CheckCircle2 className="h-3 w-3" /> Mindful, Meaningful, Joyful
                  </div>
                </td>
                <td className="p-2 sm:p-2.5 space-y-1 text-neutral-800" colSpan={3}>
                  <div>1. Guru membuka pembelajaran dengan salam santun dan doa bersama untuk menumbuhkan kesadaran diri (<em>Mindful</em>).</div>
                  <div>2. Guru melakukan apersepsi kontekstual studi kasus nyata routing multi-router di dunia industri (<em>Meaningful</em>).</div>
                  <div>3. Guru menyampaikan tujuan pembelajaran, skema asesmen, dan mengadakan kuis pemantik ringan yang membangkitkan antusiasme belajar (<em>Joyful</em>).</div>
                </td>
              </tr>
              <tr className="border-b border-neutral-200">
                <td className="p-2 sm:p-2.5 font-bold bg-neutral-50/70 border-r border-neutral-200 align-top">
                  Tahap Inti
                  <div className="text-[10px] text-neutral-500 font-normal mt-0.5">Memahami, Mengaplikasi, Merefleksi</div>
                </td>
                <td className="p-2 sm:p-2.5 space-y-2 text-neutral-800" colSpan={3}>
                  <div>
                    <strong className="text-[#121316]">• Memahami:</strong> Peserta didik mencermati tayangan demonstrasi konsep routing MikroTik, berdiskusi kelompok merumuskan hipotesis kerja jobsheet, guru memfasilitasi bimbingan intervensi khusus.
                  </div>
                  <div>
                    <strong className="text-[#121316]">• Mengaplikasi:</strong> Peserta didik mempraktikkan konfigurasi routing statis multi-router pada RouterOS MikroTik, mematuhi SOP & K3 laboratorium, menguji konektivitas, serta mengolah data laporan ringkas.
                  </div>
                  <div>
                    <strong className="text-[#121316]">• Merefleksi:</strong> Perwakilan kelompok mempresentasikan temuan praktikum, menganalisis kesesuaian hasil kerja dengan teori, dan merumuskan perbaikan teknis.
                  </div>
                </td>
              </tr>
              <tr className="border-b border-neutral-300">
                <td className="p-2 sm:p-2.5 font-bold bg-neutral-50/70 border-r border-neutral-200 align-top">
                  Tahap Penutup
                  <div className="mt-1 flex items-center gap-1 text-[10px] text-emerald-700 font-semibold">
                    <CheckCircle2 className="h-3 w-3" /> Mindful, Meaningful, Joyful
                  </div>
                </td>
                <td className="p-2 sm:p-2.5 space-y-1 text-neutral-800" colSpan={3}>
                  <div>1. Guru bersama peserta didik merangkum poin-poin esensial konfigurasi routing hari ini (<em>Meaningful</em>).</div>
                  <div>2. Refleksi diri singkat mengenai proses belajar materi dan kemanfaatan di dunia kerja (<em>Mindful & Joyful</em>).</div>
                  <div>3. Guru menyampaikan rencana tindak lanjut pertemuan mendatang dan menutup pembelajaran dengan doa serta salam.</div>
                </td>
              </tr>

              {/* BAGIAN 5: ASESMEN PEMBELAJARAN */}
              <tr className="border-b border-neutral-300 bg-neutral-100 font-bold">
                <td colSpan={4} className="p-2 sm:p-2.5 text-[#121316] uppercase tracking-wide">
                  V. ASESMEN PEMBELAJARAN
                </td>
              </tr>
              <tr className="border-b border-neutral-200">
                <td className="p-2 sm:p-2.5 font-bold bg-neutral-50/70 border-r border-neutral-200">Asesmen Awal (Diagnostik)</td>
                <td className="p-2 sm:p-2.5 text-neutral-800" colSpan={3}>
                  Asesmen diagnostik kognitif berupa 3-5 butir pertanyaan pemantik lisan/kuis singkat mengenai prasyarat routing statis dan pemetaan kesiapan belajar.
                </td>
              </tr>
              <tr className="border-b border-neutral-200">
                <td className="p-2 sm:p-2.5 font-bold bg-neutral-50/70 border-r border-neutral-200">Asesmen Proses (Formatif)</td>
                <td className="p-2 sm:p-2.5 text-neutral-800" colSpan={3}>
                  Lembar observasi keaktifan diskusi, kepatuhan K3 lab, rubrik penilaian unjuk kerja konfigurasi MikroTik, dan cek pemahaman berkala.
                </td>
              </tr>
              <tr className="border-b border-neutral-300">
                <td className="p-2 sm:p-2.5 font-bold bg-neutral-50/70 border-r border-neutral-200">Asesmen Akhir (Sumatif)</td>
                <td className="p-2 sm:p-2.5 text-neutral-800" colSpan={3}>
                  Uji unjuk kerja (<em>performance test</em>) hasil praktikum routing statis multi-router MikroTik dan portofolio laporan jobsheet kejuruan TKJ.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Titik Tanda Tangan Pengesahan Resmi Sesuai RPM.docx */}
        <div className="pt-8 mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-center border-t border-neutral-200">
          <div className="space-y-12">
            <p className="text-xs text-neutral-500">
              Mengetahui,<br />Kepala SMK Negeri 1 Jogonalan
            </p>
            <div>
              <p className="font-bold underline text-[#121316]">Drs. I Wayan Sudarma</p>
              <p className="text-xs text-neutral-500">NIP. 19780512 200501 1 004</p>
            </div>
          </div>
          <div className="space-y-12">
            <p className="text-xs text-neutral-500">
              Klaten, 10 Oktober 2026<br />Guru Mata Pelajaran TKJ
            </p>
            <div>
              <p className="font-bold underline text-[#121316]">Zainal Mustofa, S.Kom</p>
              <p className="text-xs text-neutral-500">NIP. -</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
