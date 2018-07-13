const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/designwebDb';

class UsersService {
	constructor(req, res) {
		this.req = req
		this.res = res
	}

	addUsers() {
		let self = this;
		let userdetails = this.req.body;
		try {
			MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
				assert.equal(null, err);
				client.db('designwebDb').collection('dwebusers').insertOne(userdetails, function () {
					client.close();
					return self.res.status(200).json({
						status: 'success'
					})
				});
			});
		} catch (error) {
			return self.res.status(500).json({
				status: 'error',
				error: 'error'
			});
		}
	}

	getUser() {
		let self = this;
		let getuserdetails = this.req.body;
		try {
			MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
				assert.equal(null, err);
				let userdetails = [];
				let cursor = client.db('designwebDb').collection('dwebusers').find(getuserdetails);

				cursor.each(function (err, doc) {
					assert.equal(err, null);
					if (doc != null) {
						userdetails.push(doc)
					} else {
						return self.res.status(200).json({
							status: 'success',
							data: userdetails
						})
					}
				});
			});
		}
		catch (error) {
			return self.res.status(500).json({
				status: 'error',
				error: error
			})
		}
	}

}
module.exports = UsersService