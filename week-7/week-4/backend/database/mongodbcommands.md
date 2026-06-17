Here’s a **clean, practical MongoDB command cheat-sheet** — from beginner to production-level usage. Think of this as your daily dev console toolkit 🚀

---

## 🟢 MongoDB Shell Basics

```bash
mongosh
```

```js
show dbs
use myDatabase
db
show collections
```

---

## 📁 Database Commands

```js
use schoolDB                 // create/switch db
db.dropDatabase()            // delete current db
```

---

## 📦 Collection Commands

```js
db.createCollection("users")
db.users.drop()
show collections
```

---

## ✍️ Insert Commands

```js
db.users.insertOne({ name: "Subhash", age: 21, role: "student" })

db.users.insertMany([
  { name: "Amit", age: 22 },
  { name: "Riya", age: 20 }
])
```

---

## 🔍 Read (Find) Commands

```js
db.users.find()
db.users.findOne({ name: "Subhash" })

db.users.find({ age: 21 })
db.users.find({ age: { $gt: 20 } })
db.users.find({ age: { $lt: 25 } })

db.users.find({ name: { $in: ["Amit", "Riya"] } })
```

---

## 🎯 Projection (Select Fields)

```js
db.users.find({}, { name: 1, age: 1, _id: 0 })
```

---

## 📊 Sorting, Limiting, Skipping

```js
db.users.find().sort({ age: 1 })     // asc
db.users.find().sort({ age: -1 })    // desc
db.users.find().limit(2)
db.users.find().skip(1)
```

---

## 🔄 Update Commands

```js
db.users.updateOne(
  { name: "Subhash" },
  { $set: { age: 22 } }
)

db.users.updateMany(
  { role: "student" },
  { $set: { active: true } }
)

db.users.replaceOne(
  { name: "Amit" },
  { name: "Amit", age: 23 }
)
```

---

## ❌ Delete Commands

```js
db.users.deleteOne({ name: "Riya" })
db.users.deleteMany({ age: { $lt: 21 } })
```

---

## 🔢 Count

```js
db.users.countDocuments()
db.users.countDocuments({ role: "student" })
```

---

## 🧠 Advanced Queries

```js
// AND
db.users.find({ age: 21, role: "student" })

// OR
db.users.find({ $or: [{ age: 21 }, { name: "Amit" }] })

// NOT
db.users.find({ age: { $ne: 21 } })

// Regex
db.users.find({ name: { $regex: "^S" } })
```

---

## 📌 Indexing (Performance)

```js
db.users.createIndex({ name: 1 })
db.users.getIndexes()
db.users.dropIndex("name_1")
```

---

## 📊 Aggregation Pipeline

```js
db.users.aggregate([
  { $match: { role: "student" } },
  { $group: { _id: "$age", total: { $sum: 1 } } },
  { $sort: { _id: 1 } }
])
```

---

## 🔐 User & Auth Commands

```js
show users

db.createUser({
  user: "admin",
  pwd: "admin123",
  roles: ["readWrite", "dbAdmin"]
})
```

---

## 💾 Backup & Restore

```bash
mongodump --db schoolDB
mongorestore --db schoolDB dump/schoolDB
```

---

## 🧰 Utility Commands

```js
db.stats()
db.users.stats()
db.serverStatus()
```

---

# 🧠 Pro-Level Operators Cheat Sheet

| Type       | Operators                                                 |
| ---------- | --------------------------------------------------------- |
| Comparison | `$eq`, `$ne`, `$gt`, `$gte`, `$lt`, `$lte`, `$in`, `$nin` |
| Logical    | `$and`, `$or`, `$not`, `$nor`                             |
| Array      | `$push`, `$pull`, `$addToSet`, `$elemMatch`               |
| Update     | `$set`, `$unset`, `$inc`, `$rename`, `$currentDate`       |

---

## 🧩 Example Real Project Query

```js
db.orders.find({
  status: "DELIVERED",
  amount: { $gt: 1000 },
  $or: [{ city: "Delhi" }, { city: "Mumbai" }]
}).sort({ amount: -1 }).limit(5)
```

---

Here’s a **clear step-by-step guide to using MongoDB Compass** — from install to real data operations. This is exactly how you use it in real projects & labs 💻🔥

---

## 🧩 Step 1: Install MongoDB Compass

👉 Download:
[https://www.mongodb.com/try/download/compass](https://www.mongodb.com/try/download/compass)

Choose:

* OS: Windows / Mac / Linux
* Version: **Stable**
* Package: Default

Install normally like any software.

---

## 🚀 Step 2: Open MongoDB Compass

After install, open **MongoDB Compass**
You’ll see the connection screen:

![MongoDB Compass Connection Screen](https://www.mongodb.com/docs/compass/images/compass-connect-screen.png)

---

## 🔗 Step 3: Connect to MongoDB

### 👉 For Local MongoDB:

```
mongodb://localhost:27017
```

Click **Connect**

---

### 👉 For MongoDB Atlas (Cloud):

1. Go to MongoDB Atlas
2. Click **Connect**
3. Choose **Compass**
4. Copy connection string like:

```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/
```

5. Paste → Connect

---

## 📂 Step 4: View Databases

After connection, you’ll see all DBs:

![Database View](https://www.mongodb.com/docs/compass/images/compass-databases.png)

Example:

* admin
* local
* schoolDB
* test

---

## ➕ Step 5: Create Database

Click **Create Database**

Fill:

```
Database Name: schoolDB
Collection Name: users
```

Click **Create**

---

## 📦 Step 6: Open Collection

Click:

```
schoolDB → users
```

You’ll see document panel.

---

## ✍️ Step 7: Insert Data

Click **ADD DATA → Insert Document**

Example:

```json
{
  "name": "Subhash",
  "age": 21,
  "role": "student",
  "skills": ["JS", "MongoDB", "Node"]
}
```

Click **Insert**

---

## 🔍 Step 8: Find / Filter Data

Use filter bar:

```json
{ "age": { "$gt": 20 } }
```

Use project:

```json
{ "name": 1, "age": 1 }
```

Sort:

```json
{ "age": -1 }
```

---

## ✏️ Step 9: Update Document

Click on a document → ✏️ icon
Edit fields → **Update**

---

## ❌ Step 10: Delete Document

Click 🗑️ icon → Delete

---

## 📊 Step 11: Aggregation (Visual Pipeline)

Go to **Aggregations Tab**

Example pipeline:

```json
[
  { "$match": { "role": "student" } },
  { "$group": { "_id": "$age", "total": { "$sum": 1 } } }
]
```

Click ▶️ Run

---

## 📈 Step 12: Indexes

Go to **Indexes Tab**
Click **Create Index**

```json
{ "name": 1 }
```

---

## 🧠 Step 13: Schema Analyzer

Go to **Schema Tab**
➡️ Compass auto-analyzes:

* field types
* missing fields
* structure
* nesting

Used in real production schema design.

---

# 🧪 Real Practice Flow (Interview Level)

1. Connect DB
2. Create DB
3. Create Collection
4. Insert Data
5. Filter Data
6. Update
7. Delete
8. Aggregation
9. Indexing
10. Schema Analysis

---

# 🔥 Why MongoDB Compass is Important

✅ Visual learning
✅ Debugging DB
✅ Schema design
✅ Query testing
✅ Aggregation builder
✅ Index optimization
✅ Production DB analysis
✅ MERN stack development

---

## 🧠 Pro Tip

Compass = **DBMS Lab tool**
Shell = **Production automation tool**

Good devs use **both**.

---
In MongoDB, **there is no explicit `CREATE DATABASE` command** like SQL.
A database is created **automatically when you insert data** into it.

Here’s the correct way 👇

---

## ✅ MongoDB Shell (mongosh)

### Step 1: Switch / Create Database

```js
use schoolDB
```

> If `schoolDB` doesn’t exist → MongoDB marks it as *created* but it won’t appear until data is inserted.

---

### Step 2: Create Collection + Insert Data (This actually creates the DB)

```js
db.users.insertOne({
  name: "Subhash",
  age: 21,
  role: "student"
})
```

✅ Now the database is **physically created**

---

### Verify:

```js
show dbs
```

---

# 🧠 SQL vs MongoDB Logic

| SQL                         | MongoDB                        |
| --------------------------- | ------------------------------ |
| `CREATE DATABASE schoolDB;` | `use schoolDB` + insert        |
| `CREATE TABLE users(...)`   | `db.createCollection("users")` |

---

# Optional Explicit Collection Creation

```js
use schoolDB
db.createCollection("users")
```

---

# MongoDB Compass Way (GUI)

1. Click **Create Database**
2. Enter:

```
Database Name: schoolDB
Collection Name: users
```

3. Click **Create**

---

# One-Line Shortcut

```js
use schoolDB; db.users.insertOne({ init: true })
```

---
Below is a **complete MongoDB learning roadmap in commands** — from zero → advanced → production — taught through **real use-cases**, not just syntax.
This is how you truly *learn MongoDB*, not just memorize commands. 🧠🔥

---

# 🟢 PHASE 1 — Setup & Basics (Foundation Layer)

### Start MongoDB

```bash
mongod
mongosh
```

### Check version

```bash
mongod --version
mongosh --version
```

---

# 🟡 PHASE 2 — Database Level

### Create / Switch DB

```js
use schoolDB
```

### Show DBs

```js
show dbs
```

### Current DB

```js
db
```

### Delete DB

```js
db.dropDatabase()
```

---

# 🟠 PHASE 3 — Collection Level

### Create collection

```js
db.createCollection("students")
```

### Show collections

```js
show collections
```

### Drop collection

```js
db.students.drop()
```

---

# 🔵 PHASE 4 — Insert Operations (Data Creation)

### Insert One

```js
db.students.insertOne({
  name: "Subhash",
  age: 21,
  course: "CSE",
  skills: ["JS", "MongoDB"]
})
```

### Insert Many

```js
db.students.insertMany([
  { name: "Amit", age: 22 },
  { name: "Riya", age: 20 }
])
```

---

# 🟣 PHASE 5 — Read Operations (Queries)

### Read all

```js
db.students.find()
```

### Pretty print

```js
db.students.find().pretty()
```

### Find one

```js
db.students.findOne({ name: "Subhash" })
```

---

## 🎯 Filtering Use-Cases

```js
db.students.find({ age: 21 })
db.students.find({ age: { $gt: 20 } })
db.students.find({ age: { $lt: 22 } })
db.students.find({ age: { $gte: 21, $lte: 25 } })
```

---

## 🧠 Logical Queries

```js
// AND
db.students.find({ age: 21, course: "CSE" })

// OR
db.students.find({ $or: [{ age: 21 }, { name: "Amit" }] })

// NOT
db.students.find({ age: { $ne: 21 } })
```

---

## 🔎 Regex Search

```js
db.students.find({ name: { $regex: "^S" } })
```

---

# 📌 Projection (Select Fields)

```js
db.students.find({}, { name: 1, age: 1, _id: 0 })
```

---

# 📊 Sorting, Limiting, Skipping

```js
db.students.find().sort({ age: 1 })    // asc
db.students.find().sort({ age: -1 })   // desc
db.students.find().limit(2)
db.students.find().skip(1)
```

---

# 🟤 PHASE 6 — Update Operations

### Update One

```js
db.students.updateOne(
  { name: "Subhash" },
  { $set: { age: 22 } }
)
```

### Update Many

```js
db.students.updateMany(
  { course: "CSE" },
  { $set: { active: true } }
)
```

---

## 🔧 Update Operators

```js
$set
$unset
$inc
$rename
$currentDate
```

Example:

```js
db.students.updateOne(
  { name: "Subhash" },
  { $inc: { age: 1 } }
)
```

---

# 🔴 PHASE 7 — Delete Operations

```js
db.students.deleteOne({ name: "Amit" })
db.students.deleteMany({ age: { $lt: 21 } })
```

---

# ⚪ PHASE 8 — Count

```js
db.students.countDocuments()
db.students.countDocuments({ course: "CSE" })
```

---

# 🧩 PHASE 9 — Array Operations

```js
db.students.updateOne(
  { name: "Subhash" },
  { $push: { skills: "NodeJS" } }
)

db.students.updateOne(
  { name: "Subhash" },
  { $pull: { skills: "MongoDB" } }
)

db.students.updateOne(
  { name: "Subhash" },
  { $addToSet: { skills: "JS" } }
)
```

---

# 🟫 PHASE 10 — Aggregation Pipeline (Real Analytics)

```js
db.students.aggregate([
  { $match: { course: "CSE" } },
  { $group: { _id: "$age", total: { $sum: 1 } } },
  { $sort: { _id: 1 } }
])
```

---

# 🧠 PHASE 11 — Indexing (Performance Engineering)

```js
db.students.createIndex({ name: 1 })
db.students.getIndexes()
db.students.dropIndex("name_1")
```

---

# 🔐 PHASE 12 — User & Auth

```js
show users

db.createUser({
  user: "admin",
  pwd: "admin123",
  roles: ["readWrite", "dbAdmin"]
})
```

---

# 💾 PHASE 13 — Backup & Restore

```bash
mongodump --db schoolDB
mongorestore --db schoolDB dump/schoolDB
```

---

# 📡 PHASE 14 — Admin Commands

```js
db.stats()
db.students.stats()
db.serverStatus()
```

---

# ⚙️ PHASE 15 — Transactions (Advanced)

```js
const session = db.getMongo().startSession()
session.startTransaction()

const coll = session.getDatabase("schoolDB").students

coll.insertOne({ name: "TxnUser" })
coll.updateOne({ name: "Subhash" }, { $set: { tx: true } })

session.commitTransaction()
session.endSession()
```

---

# 🧠 PHASE 16 — Real Project Use-Cases

### E-commerce Query

```js
db.orders.find({
  status: "DELIVERED",
  amount: { $gt: 1000 },
  $or: [{ city: "Delhi" }, { city: "Mumbai" }]
}).sort({ amount: -1 }).limit(5)
```

---

# 🧬 PHASE 17 — Schema Design Patterns

### Embedded

```js
user = {
  name: "Subhash",
  address: { city: "Delhi", pin: 110001 }
}
```

### Referenced

```js
user = { name: "Subhash", addressId: ObjectId("...") }
```

---

# 🧱 PHASE 18 — MongoDB Architecture Concepts (Commands Map To)

| Concept     | Command                      |
| ----------- | ---------------------------- |
| CRUD        | insert, find, update, delete |
| Indexing    | createIndex                  |
| Scaling     | sharding                     |
| Safety      | replication                  |
| Performance | aggregation                  |
| Security    | users/roles                  |
| Backup      | mongodump                    |
| Restore     | mongorestore                 |

---

# 🧠 Learning Path (How to Master It)

```
Shell → Compass → Mongoose → MERN → System Design → Scaling → Production
```

---

# 🎯 Interview Readiness Topics Covered

✅ CRUD
✅ Aggregation
✅ Indexing
✅ Transactions
✅ Schema design
✅ Sharding
✅ Replication
✅ Performance
✅ Security
✅ Backup/restore
✅ Cloud (Atlas ready)
✅ MERN integration

---

## 🧠 Final Truth

If SQL is **table thinking**,
MongoDB is **data modeling thinking**.

---
You’re asking for **MongoDB operators & query syntaxes** like `$gt`, `$lt`, etc — basically the **full MongoDB operator language** 🔥
This is the real power layer of MongoDB. Let’s turn it into a clean, learnable map 🧠📚

---

# 🔢 Comparison Operators

```js
$eq   // equal
$ne   // not equal
$gt   // greater than
$gte  // greater than or equal
$lt   // less than
$lte  // less than or equal
$in   // in array
$nin  // not in array
```

### Examples:

```js
db.users.find({ age: { $gt: 18 } })
db.users.find({ age: { $lte: 30 } })
db.users.find({ name: { $in: ["Amit", "Riya"] } })
```

---

# 🧠 Logical Operators

```js
$and
$or
$not
$nor
```

### Examples:

```js
db.users.find({ $and: [{ age: 21 }, { role: "student" }] })

db.users.find({ $or: [{ age: 21 }, { role: "admin" }] })

db.users.find({ age: { $not: { $gt: 25 } } })

db.users.find({ $nor: [{ age: 21 }, { name: "Amit" }] })
```

---

# 📦 Element Operators

```js
$exists
$type
```

### Examples:

```js
db.users.find({ email: { $exists: true } })
db.users.find({ age: { $type: "int" } })
```

---

# 🧾 Evaluation Operators

```js
$expr
$jsonSchema
$mod
$regex
$text
$where
```

### Examples:

```js
db.users.find({ name: { $regex: "^S" } })

db.users.find({
  $expr: { $gt: ["$salary", "$expense"] }
})
```

---

# 🧩 Array Operators

```js
$all
$elemMatch
$size
```

### Examples:

```js
db.users.find({ skills: { $all: ["JS", "MongoDB"] } })

db.users.find({
  scores: { $elemMatch: { $gt: 80, $lt: 90 } }
})

db.users.find({ skills: { $size: 3 } })
```

---

# ✏️ Update Operators

```js
$set
$unset
$inc
$mul
$rename
$currentDate
$min
$max
```

### Examples:

```js
db.users.updateOne(
  { name: "Subhash" },
  { $inc: { age: 1 } }
)

db.users.updateOne(
  { name: "Subhash" },
  { $unset: { tempField: "" } }
)
```

---

# 📥 Array Update Operators

```js
$push
$pull
$addToSet
$pop
$pullAll
```

### Examples:

```js
db.users.updateOne(
  { name: "Subhash" },
  { $push: { skills: "NodeJS" } }
)

db.users.updateOne(
  { name: "Subhash" },
  { $addToSet: { skills: "MongoDB" } }
)
```

---

# 🧬 Aggregation Operators

```js
$match
$group
$sort
$project
$limit
$skip
$lookup
$unwind
$count
$facet
$bucket
```

### Examples:

```js
db.orders.aggregate([
  { $match: { status: "DELIVERED" } },
  { $group: { _id: "$city", total: { $sum: 1 } } }
])
```

---

# 🧮 Arithmetic Operators

```js
$add
$subtract
$multiply
$divide
$mod
```

---

# 🧠 Conditional Operators

```js
$cond
$ifNull
$switch
```

---

# 🔤 String Operators

```js
$concat
$toLower
$toUpper
$substr
$trim
$regexMatch
```

---

# 🕒 Date Operators

```js
$year
$month
$dayOfMonth
$hour
$minute
$second
$toDate
```

---

# 🔐 Bitwise Operators

```js
$bit
```

---

# 📌 Index Operators

```js
$hint
```

---

# 🧪 Type Conversion

```js
$toInt
$toString
$toDouble
$toBool
$convert
```

---

# 🧠 Real Query Examples

### Smart filter:

```js
db.users.find({
  age: { $gte: 18, $lte: 30 },
  skills: { $in: ["JS", "NodeJS"] },
  active: { $eq: true }
})
```

---

### Advanced logic:

```js
db.users.find({
  $or: [
    { age: { $lt: 18 } },
    { age: { $gt: 60 } }
  ]
})
```

---

# 🧩 MongoDB Mental Model

MongoDB queries = **JSON Logic Engine**

Not SQL syntax — **data logic syntax**

---

# 🎯 Learning Strategy

Learn in layers:

```
Comparison → Logical → Array → Update → Aggregation → Index → Transactions
```

---
Perfect — comparison operators are the **core of MongoDB querying**.
Let’s go **deep**, not just names — but patterns, combinations, edge-cases, and real use-cases 🔥🧠

---

# 🔢 MongoDB Comparison Operators — Deep Dive

## 🧩 Basic Operators

```js
$eq   // equals
$ne   // not equals
$gt   // greater than
$gte  // greater than or equal
$lt   // less than
$lte  // less than or equal
$in   // value exists in array
$nin  // value not in array
```

---

# 🎯 Core Syntax Pattern

```js
db.collection.find({
  field: { operator: value }
})
```

---

# 🟢 $eq (Equal)

```js
db.users.find({ age: { $eq: 21 } })
```

Same as:

```js
db.users.find({ age: 21 })
```

🧠 Use `$eq` explicitly when combining operators:

```js
db.users.find({ age: { $eq: 21, $lt: 30 } })
```

---

# 🔴 $ne (Not Equal)

```js
db.users.find({ age: { $ne: 21 } })
```

⚠️ Important:

* `$ne` also matches **missing fields**

```js
db.users.find({ age: { $ne: 21 } })  // includes docs with no age field
```

Safer:

```js
db.users.find({ age: { $ne: 21 }, age: { $exists: true } })
```

---

# 🔼 $gt (Greater Than)

```js
db.users.find({ age: { $gt: 18 } })
```

---

# 🔼 $gte (Greater Than or Equal)

```js
db.users.find({ age: { $gte: 18 } })
```

---

# 🔽 $lt (Less Than)

```js
db.users.find({ age: { $lt: 60 } })
```

---

# 🔽 $lte (Less Than or Equal)

```js
db.users.find({ age: { $lte: 60 } })
```

---

# 📏 Range Queries (Very Important Pattern)

```js
db.users.find({
  age: { $gte: 18, $lte: 30 }
})
```

Real use-case:

```js
db.products.find({
  price: { $gt: 500, $lt: 5000 }
})
```

---

# 📦 $in (Match Any Value in List)

```js
db.users.find({
  role: { $in: ["admin", "manager"] }
})
```

Array field:

```js
db.users.find({
  skills: { $in: ["MongoDB"] }
})
```

---

# 🚫 $nin (Not in List)

```js
db.users.find({
  role: { $nin: ["banned", "blocked"] }
})
```

---

# 🧠 Advanced Comparison Patterns

## Compare with null

```js
db.users.find({ email: { $eq: null } })
```

Matches:

* `email: null`
* missing `email` field ❗

Strict null only:

```js
db.users.find({ email: null, email: { $exists: true } })
```

---

# 🔬 Type-sensitive comparisons

```js
db.users.find({ age: { $gt: "18" } })   // string compare ❌
db.users.find({ age: { $gt: 18 } })     // number compare ✅
```

---

# 📊 Date comparisons

```js
db.users.find({
  createdAt: { $gte: new Date("2025-01-01") }
})
```

Range:

```js
db.orders.find({
  createdAt: {
    $gte: new Date("2025-01-01"),
    $lte: new Date("2025-12-31")
  }
})
```

---

# 🧪 ObjectId comparison

```js
db.users.find({
  _id: { $gt: ObjectId("64ff00000000000000000000") }
})
```

---

# 🔁 Combined Operators

```js
db.users.find({
  age: { $gt: 18, $lt: 30 },
  salary: { $gte: 30000 },
  role: { $ne: "banned" }
})
```

---

# 🧱 Nested Field Comparison

```js
db.users.find({
  "address.pin": { $gte: 110000, $lte: 119999 }
})
```

---

# 🧠 Comparison in Aggregation ($expr)

```js
db.users.aggregate([
  {
    $match: {
      $expr: { $gt: ["$salary", "$expense"] }
    }
  }
])
```

---

# ⚠️ Edge Case Behavior

### $ne includes missing fields:

```js
{ field: { $ne: value } }
```

### $in with empty array:

```js
{ field: { $in: [] } }  // matches nothing
```

### $nin with empty array:

```js
{ field: { $nin: [] } } // matches everything
```

---

# 🎯 Performance Tip

**Range queries + index**:

```js
db.users.createIndex({ age: 1 })
```

Best pattern:

```js
db.users.find({ age: { $gte: 18, $lte: 30 } })
```

---

# 🧠 Mental Model

Think in math logic:

```
>  = $gt
≥  = $gte
<  = $lt
≤  = $lte
≠  = $ne
∈  = $in
∉  = $nin
=  = $eq
```

---

# 🧪 Practice Queries

Try these:

```js
// Users between 20 and 25
db.users.find({ age: { $gte: 20, $lte: 25 } })

// Products not in banned categories
db.products.find({ category: { $nin: ["illegal", "fake"] } })

// Orders above 1000
db.orders.find({ amount: { $gt: 1000 } })

// Active users not age 21
db.users.find({ active: true, age: { $ne: 21 } })
```

---
