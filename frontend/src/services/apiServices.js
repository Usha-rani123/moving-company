import authService from "./authService";

const BASE_URL = "http://localhost:5000";

/* Helper function for headers */
const getHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${authService.getToken()}`,
});

/* USERS */
export const getMyProfile = async () => {
  const res = await fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: getHeaders(),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch profile");
  }

  return await res.json();
};
// Get User by Id
export const getUserById = async (userId) => {
  const res = await fetch(`${BASE_URL}/users/${userId}`, {
    method: "GET",
    headers: getHeaders(),
  });

  return await res.json();
};
// Update user
export const updateUser = async (userId, data) => {
  const res = await fetch(`${BASE_URL}/users/${userId}`, {
    method: "PUT",
    headers: getHeaders(),
    body: JSON.stringify(data),
  });

  return await res.json();
};
/* SERVICES */
export const createService = async (data) => {
  const res = await fetch(`${BASE_URL}/services`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Failed to create service", res.message);
  }
  return await res.json();
};
export const listServices = async () => {
  const res = await fetch(`${BASE_URL}/services`);

  return await res.json();
};

/* INQUIRIES */
export const createInquiry = async (data) => {
  const res = await fetch(`${BASE_URL}/inquiries`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(data),
  });
  const result = await res.json();

  if (!res.ok) {
    // if validation errors array exists
    if (result.errors) {
      throw new Error(result.errors.join(", "));
    }

    // if duplicate or other message exists
    throw new Error(result.message || "Failed to create inquiry");
  }

  return result;
};

export const listInquiries = async () => {
  const res = await fetch(`${BASE_URL}/inquiries`, {
    headers: getHeaders(),
  });

  return await res.json();
};

/* QUOTES */
export const createQuote = async (data) => {
  const res = await fetch(`${BASE_URL}/quotes`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Failed to estimate quote", res.message);
  }
  return await res.json();
};
export const updateQuote = async (id, data) => {
  const res = await fetch(`${BASE_URL}/quotes/${id}`, {
    method: "PUT",
    headers: getHeaders(),
    body: JSON.stringify(data),
  });

  return await res.json();
};

export const getCustomerQuotes = async () => {
  const res = await fetch(`${BASE_URL}/quotes/customer`, {
    headers: getHeaders(),
  });

  return await res.json();
};
export const listQuotes = async () => {
  const res = await fetch(`${BASE_URL}/quotes`, {
    headers: getHeaders(),
  });

  return await res.json();
};

/* BOOKINGS */
export const createBooking = async (data) => {
  const res = await fetch(`${BASE_URL}/bookings`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(data),
  });

  return await res.json();
};

// for admin
export const listBookings = async () => {
  const res = await fetch(`${BASE_URL}/bookings`, {
    method: "GET",
    headers: getHeaders(),
  });

  return await res.json();
};

// for customer
export const getMyBookings = async () => {
  const res = await fetch(`${BASE_URL}/bookings/my-bookings`, {
    method: "GET",
    headers: getHeaders(),
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to fetch bookings");
  }
  const data = await res.json();

  return data;
};

export const getDashboardStats = async () => {
  const res = await fetch(`${BASE_URL}/bookings/dashboard-stats`, {
    method: "GET",
    headers: getHeaders(),
  });

  return await res.json();
};

export const completeBooking = async (id) => {
  const res = await fetch(`${BASE_URL}/bookings/${id}/complete`, {
    method: "PUT",
    headers: getHeaders(),
  });

  return await res.json();
};
