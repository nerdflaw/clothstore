const mongoose = require("mongoose");
require('dotenv').config();

const walletSchema = new mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, required: true },
	wallet: [{
		balance: { type: Number, default: 0 },
		creditedFor: { type: String, default: 'Wallet created' },
		creditedAgainst: { type: mongoose.Schema.Types.ObjectId, default: null },
		createdDate: { type: Date, default: Date.now }
	}],
	status: { type: Boolean, default: false }
}, { timestamps: true });

const Wallet = mongoose.model('Wallet', walletSchema);

module.exports = Wallet;
