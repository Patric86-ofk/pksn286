function sendMessage() {
    const nama = document.getElementById('nama').value;
    const kelas = document.getElementById('kelas').value;
    const jurusan = document.getElementById('jurusan').value;
    const asalSekolah = document.getElementById('asalSekolah').value;
    const namaOrangTua = document.getElementById('namaOrangTua').value;
    const nomorHandphone = document.getElementById('nomorHandphone').value;
    const email = document.getElementById('email').value;
    const pesanKesan = document.getElementById('pesanKesan').value;

    const message = `Pendaftaran Organisasi PKS
    
    Nama: ${nama}
    
    AKelas: ${kelas}
    
    Jurusan: ${jurusan}
    
    Asal Sekolah: ${asalSekolah}
    
    Nama Orang Tua: ${namaOrangTua}
    
    Nomor Handphone: ${nomorHandphone}
    
    Email: ${email}
    
    Pesan dan Kesan: ${pesanKesan}`;

    const whatsappUrl = `https://wa.me/628811559012?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}