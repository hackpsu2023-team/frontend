/*
Loan
GET /accounts/{id}/loansGet all loans
GET /loans/{id}Get loan by id
POST /accounts/{id}/loansCreate a loan
PUT /loans/{id}Update a specific existing loan
DELETE /loans/{id}Delete a specific existing loan
*/

export class loan {
    async getLoan(id) {
        const res = await fetch(baseUrl + `loans/${id}?key=${key}`)
        return res.json()
    }

    async getAcountLoan(id) {
        const res = await fetch(baseUrl + `accounts/${id}/loans?key=${key}`)
        return res.json()
    }

    async createLoan(id, loan) {
        const res = await fetch(baseUrl + `accounts/${id}/loans?key=${key}`, {
            method: 'POST', headers: {
                'Accept': 'application/json', 'Content-Type': 'application/json'
            }, body: JSON.stringify(loan)
        })
        return res.json()
    }

    async updateLoan(id, loan) {
        const res = await fetch(baseUrl + `loans/${id}?key=${key}`, {
            method: 'PUT', headers: {
                'Accept': 'application/json', 'Content-Type': 'application/json'
            }, body: JSON.stringify(loan)
        })
        return res.json()
    }

    async deleteLoan(id) {
        const res = await fetch(baseUrl + `loans/${id}?key=${key}`, {
            method: 'DELETE', headers: {
                'Accept': 'application/json', 'Content-Type': 'application/json'
            }
        })
        return res.json()
    }
    
}