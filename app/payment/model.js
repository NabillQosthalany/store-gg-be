const mongoose = require("mongoose");
let paymentSchema = mongoose.Schema(
  {
    type: {
      type: String,
      require: [true, "tipe pembayaran harus diisi"],
    },
    status: {
      type: String,
      require: ["Y", "N"],
      default: "Y",
    },
    banks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bank",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
