import calculationsData from "@/services/mockData/calculations.json"

let calculations = [...calculationsData]

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const calculationService = {
  async getAll() {
    await delay(300)
    return [...calculations]
  },

  async getById(id) {
    await delay(200)
    const calculation = calculations.find(calc => calc.Id === parseInt(id))
    if (!calculation) {
      throw new Error(`Calculation with ID ${id} not found`)
    }
    return { ...calculation }
  },

  async create(calculation) {
    await delay(400)
    const maxId = calculations.length > 0 ? Math.max(...calculations.map(c => c.Id)) : 0
    const newCalculation = {
      ...calculation,
      Id: maxId + 1,
      timestamp: Date.now()
    }
    calculations.push(newCalculation)
    return { ...newCalculation }
  },

  async update(id, data) {
    await delay(300)
    const index = calculations.findIndex(calc => calc.Id === parseInt(id))
    if (index === -1) {
      throw new Error(`Calculation with ID ${id} not found`)
    }
    calculations[index] = { ...calculations[index], ...data }
    return { ...calculations[index] }
  },

  async delete(id) {
    await delay(250)
    const index = calculations.findIndex(calc => calc.Id === parseInt(id))
    if (index === -1) {
      throw new Error(`Calculation with ID ${id} not found`)
    }
    const deleted = calculations.splice(index, 1)[0]
    return { ...deleted }
  },

  // Calculator-specific methods
  async saveCalculation(expression, result) {
    return await this.create({
      expression,
      result: result.toString(),
      timestamp: Date.now()
    })
  },

  async getRecentCalculations(limit = 10) {
    await delay(200)
    return [...calculations]
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, limit)
  },

  async clearHistory() {
    await delay(300)
    calculations = []
    return true
  }
}