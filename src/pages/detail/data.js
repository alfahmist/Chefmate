import step1 from "../../assets/detail/step/1.webp";
import step2 from "../../assets/detail/step/2.webp";
import step3 from "../../assets/detail/step/3.webp";
import step4 from "../../assets/detail/step/4.webp";
import step5 from "../../assets/detail/step/5.webp";
import step6 from "../../assets/detail/step/6.webp";
import step7 from "../../assets/detail/step/7.webp";
import step8 from "../../assets/detail/step/8.webp";

const data = [
  {
    "nama-resep": "Siyao Kai / Ayam Kecap ala Hongkong",
    waktu: "30 menit",
    porsi: "6 orang",
    "bahan-bahan": [
      {
        "bahan-baku": [
          { jumlah: "2 potong", "nama-bahan": "paha ayam" },
          { jumlah: "4 siung", "nama-bahan": "bawang merah" },
          { jumlah: "4 siung", "nama-bahan": "bawang putih" },
          { jumlah: "1 jempol", "nama-bahan": "jahe" },
          { jumlah: "2 batang", "nama-bahan": "daun bawang" },
        ],
      },
      {
        judul: "saus",
        "bahan-baku": [
          { jumlah: "2 sdm", "nama-bahan": "kecap manis" },
          { jumlah: "2 sdm", "nama-bahan": "kecap asin" },
          { jumlah: "1 1/3 sdm", "nama-bahan": "saus tiram" },
          { jumlah: "2/3 sdt", "nama-bahan": "kaldu bubuk" },
          { jumlah: "1/3 sdt", "nama-bahan": "lada bubuk" },
          { jumlah: "2/3 sdt", "nama-bahan": "gula pasir" },
          { jumlah: "1 1/3 sdm", "nama-bahan": "minyak wijen" },
          { jumlah: "1/3 sdt", "nama-bahan": "cuka" },
          { jumlah: "50-75 ml", "nama-bahan": "air" },
        ],
      },
      {
        judul: "sambal",
        "bahan-baku": [
          { jumlah: "50-75 ml", "nama-bahan": "air" },
          { jumlah: "3 buah", "nama-bahan": "cabe rawit" },
          { jumlah: "1/4", "nama-bahan": "buah tomat" },
          { jumlah: "1/2 siung", "nama-bahan": "bawang putih" },
          { jumlah: "1/2 ruas jari", "nama-bahan": "jahe" },
          { jumlah: "1/5 sdm", "nama-bahan": "saus sambal" },
          { jumlah: "1/2 buah", "nama-bahan": "jeruk nipis ambil airnya" },
          { jumlah: "1 sdt", "nama-bahan": "gula pasir" },
          { jumlah: "1/4 sdt", "nama-bahan": "kaldu jamur" },
          { jumlah: "1/4 sdt", "nama-bahan": "garam" },
        ],
      },
      {},
    ],
    detail: {
      "cara-membuat": [
        {
          judul: "Aduk semua bahan saus jadi satu sampai larut.",
          img: step1,
        },
        {
          judul:
            "Iris tipis bawang putih, bawang merah dan jahe. Untuk daun bawang potong kasar saja.",
          img: step2,
        },
        {
          judul:
            "Letakkan ayam yang sudah di cuci bersih kedalam wajan. Taburi diatasnya dengan bawang putih, bawang merah dan daun bawang.",
          img: step3,
        },
        {
          judul:
            "Tuang larutan saus merata diatas ayam. Nyalakan api sedang cenderung kecil. Tutup wajannya.",
          img: step4,
        },
        {
          judul:
            "Masak sambil dibolak balik agar bumbu meresap dan warnanya cantik. Sampai sausnya menyusut.",
          img: step5,
        },
        {
          judul: "Angkat ayam dan potong-potong",
          img: step6,
        },
        {
          judul:
            "Haluskan semua bahan sambal menggunakan blender. Pindahkan kemangkok saus.",
          img: step7,
        },
        {
          judul: "Sajikan hangat bersama sambalnya.",
          img: step8,
        },
      ],
    },
  },
];

export default data;
