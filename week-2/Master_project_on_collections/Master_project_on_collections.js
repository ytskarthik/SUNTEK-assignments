// ===== DATA SETUP =====
const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};

// ================= MODULE 1: USER PROCESSING ENGINE =================

const UserEngine = {
  getActiveUsers: () => users.filter(u => u.active),
  getActiveUserNames: () => users.filter(u => u.active).map(u => u.name),
  hasAdmin: () => users.some(u => u.role === "admin"),
  findUserById: (id) => users.find(u => u.id === id),
  deactivateUser: (id) => users.map(u => u.id === id ? { ...u, active: false } : u)
};

// TEST USER ENGINE
console.log("Active Users:", UserEngine.getActiveUsers());
console.log("Active User Names:", UserEngine.getActiveUserNames());
console.log("Admin exists?", UserEngine.hasAdmin());
console.log("Find user by id 3:", UserEngine.findUserById(3));
console.log("Deactivate user 1 immutably:", UserEngine.deactivateUser(1));

// ================= MODULE 2: COURSE CATALOG ENGINE =================

const CourseEngine = {
  getPublishedCourses: () => courses.filter(c => c.published),
  sortByPriceDesc: () => [...courses].sort((a,b) => b.price - a.price),
  getTitleAndPrice: () => courses.map(c => ({ title: c.title, price: c.price })),
  getTotalValueOfPublished: () => courses.filter(c => c.published).reduce((acc, c) => acc + c.price, 0),
  addCourse: (newCourse) => [...courses, newCourse]
};

// TEST COURSE ENGINE
console.log("Published Courses:", CourseEngine.getPublishedCourses());
console.log("Courses sorted by price (high→low):", CourseEngine.sortByPriceDesc());
console.log("Title & Price:", CourseEngine.getTitleAndPrice());
console.log("Total value of published courses:", CourseEngine.getTotalValueOfPublished());
console.log("Add new course immutably:", CourseEngine.addCourse({id:104, title:"Python", price:1199, published:true}));

// ================= MODULE 3: SHOPPING CART ENGINE =================

const CartEngine = {
  mergeCartWithCourses: () => cart.map(item => {
    const course = courses.find(c => c.id === item.courseId);
    return { ...item, ...course };
  }),
  getTotalCartAmount: () => cart.reduce((total, item) => {
    const course = courses.find(c => c.id === item.courseId);
    return total + (course.price * item.qty);
  }, 0),
  increaseQty: (courseId, qty = 1) => cart.map(item => item.courseId === courseId ? { ...item, qty: item.qty + qty } : item),
  removeCourse: (courseId) => cart.filter(item => item.courseId !== courseId),
  allPaidCourses: () => cart.every(item => {
    const course = courses.find(c => c.id === item.courseId);
    return course.price > 0;
  })
};

// TEST CART ENGINE
console.log("Merged Cart:", CartEngine.mergeCartWithCourses());
console.log("Total Cart Amount:", CartEngine.getTotalCartAmount());
console.log("Increase qty of course 101:", CartEngine.increaseQty(101, 2));
console.log("Remove course 103:", CartEngine.removeCourse(103));
console.log("All cart items are paid?", CartEngine.allPaidCourses());

// ================= MODULE 4: ROLE & PERMISSION ENGINE =================

const RoleEngine = {
  getAllRoles: () => Object.keys(roles),
  canStudentDelete: () => roles.student.includes("delete"),
  getAllUniquePermissions: () => [...new Set(Object.values(roles).flat())],
  addRole: (roleName, permissions) => ({ ...roles, [roleName]: permissions })
};

// TEST ROLE ENGINE
console.log("All role names:", RoleEngine.getAllRoles());
console.log("Can student delete?", RoleEngine.canStudentDelete());
console.log("All unique permissions:", RoleEngine.getAllUniquePermissions());
console.log("Add moderator role immutably:", RoleEngine.addRole("moderator", ["view", "update"]));
