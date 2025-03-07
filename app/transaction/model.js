const mongoose = require("mongoose");
let transactionSchema = mongoose.Schema(
  {
    historyVoucherTopup: {
      gameName: {
        type: String,
        require: [true, "nama game harus diisi"],
      },
      category: {
        type: String,
        require: [true, "kategory harus diisi"],
      },
      thumbnail: {
        type: String,
      },
      coinName: {
        type: String,
        require: [true, "nama koin harus diisi"],
      },
      coninQuantity: {
        type: String,
        require: [true, "jumlah koin harus diisi"],
      },
      price: {
        type: Number,
      },
    },
    historyPayment: {
      name: { type: String, require: [true, "nama harus diisi"] },
      type: { type: String, require: [true, "type harus diisi"] },
      bankName: { type: String, require: [true, "nama bank harus diisi"] },
      noRekening: {
        type: String,
        require: [true, "nomor rekening harus diisi"],
      },
    },
    name: {
      type: String,
      require: [true, "nama harus diisi"],
      maxlength: [225, "panjang nama harus antara 3 - 225 karakter"],
      minlength: [3, "panjang nama harus antara 3 - 225 karakter"],
    },
    accountUser: {
      type: String,
      require: [true, "nama akun harus diisi"],
      maxlength: [225, "panjang nama harus antara 3 - 225 karakter"],
      minlength: [3, "panjang nama harus antara 3 - 225 karakter"],
    },
    tax: {
      type: Number,
      default: 0,
    },
    value: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      require: ["pending", "success", "failed"],
      default: "pending",
    },
    player: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
    historyUser: {
      name: { type: String, require: [true, "name player harus diisi"] },
      phoneNumber: {
        type: Number,
        require: [true, "nomor telpon harus diisi"],
        maxlength: [225, "panjang nomor telpon harus antara 10 - 225 karakter"],
        minlength: [10, "panjang nomor telpon harus antara 10 - 225 karakter"],
      },
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);
