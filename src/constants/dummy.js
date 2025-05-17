// Dummy data for testing purposes

export const dummyPackages = [
  {
    id: 1,
    category: "Student",
    package_name: "Student Basic Counseling",
    price_inr: 499,
    duration: "30 min session",
    includes:
      "One-on-one counseling\nAcademic guidance\nStress management techniques\nFollow-up resources",
    active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 2,
    category: "Student",
    package_name: "Student Premium Package",
    price_inr: 1299,
    duration: "3 sessions (45 min each)",
    includes:
      "Three counseling sessions\nPersonalized academic plan\nCareer guidance\nStress management techniques\nOngoing support for 1 month",
    active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 3,
    category: "Parental",
    package_name: "Parenting Support Session",
    price_inr: 699,
    duration: "45 min session",
    includes:
      "Parenting strategies\nUnderstanding child behavior\nCommunication techniques\nFollow-up resources",
    active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 4,
    category: "Teacher",
    package_name: "Classroom Management",
    price_inr: 799,
    duration: "60 min session",
    includes:
      "Classroom management strategies\nStudent engagement techniques\nHandling difficult situations\nPersonalized action plan",
    active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 5,
    category: "Overall",
    package_name: "Mental Wellness Package",
    price_inr: 1499,
    duration: "4 sessions (30 min each)",
    includes:
      "Comprehensive mental health assessment\nPersonalized wellness plan\nStress management techniques\nOngoing support for 2 months",
    active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 6,
    category: "Overall",
    package_name: "Career Guidance Package",
    price_inr: 1299,
    duration: "3 sessions (45 min each)",
    includes:
      "Career assessment\nPersonalized career plan\nInterview preparation\nResume building assistance\nFollow-up support",
    active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export const dummyBookings = [
  {
    id: 1,
    acknowledgment_number: "CNS1620394857123",
    package_id: 2,
    package_name: "Student Premium Package",
    amount: 1299,
    name: "John Doe",
    email: "john@example.com",
    phone: "9876543210",
    address: "123 Main St, City",
    concerns: "Exam anxiety and career planning",
    status: "confirmed",
    payment_id: "pay_123456789",
    order_id: "order_123456789",
    appointment_date: new Date(Date.now() + 86400000 * 2).toISOString(), // 2 days from now
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 2,
    acknowledgment_number: "CNS1620394857124",
    package_id: 3,
    package_name: "Parenting Support Session",
    amount: 699,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "9876543211",
    address: "456 Oak St, City",
    concerns: "Child behavior issues",
    status: "pending",
    payment_id: null,
    order_id: "order_123456790",
    appointment_date: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 3,
    acknowledgment_number: "CNS1620394857125",
    package_id: 5,
    package_name: "Mental Wellness Package",
    amount: 1499,
    name: "Robert Johnson",
    email: "robert@example.com",
    phone: "9876543212",
    address: "789 Pine St, City",
    concerns: "Work-related stress and anxiety",
    status: "completed",
    payment_id: "pay_123456791",
    order_id: "order_123456791",
    appointment_date: new Date(Date.now() - 86400000 * 5).toISOString(), // 5 days ago
    created_at: new Date(Date.now() - 86400000 * 10).toISOString(), // 10 days ago
    updated_at: new Date(Date.now() - 86400000 * 5).toISOString(), // 5 days ago
  },
];
