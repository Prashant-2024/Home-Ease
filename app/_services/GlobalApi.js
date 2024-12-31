const { gql, default: request } = require("graphql-request");

const MASTER_URL = `https://api-ap-south-1.hygraph.com/v2/${process.env.NEXT_PUBLIC_MASTER_URL_KEY}/master`;

const getCategory = async () => {
  // get the query from hygraph API playground
  const query = gql`
    query Category {
      categories {
        bgColor {
          hex
        }
        id
        name
        icon {
          url
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getAllBusiness = async () => {
  const query = gql`
    query BusinessList {
      businessLists {
        about
        address
        category {
          name
        }
        contactPerson
        email
        images {
          url
        }
        id
        name
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getBussinessByCategory = async (category) => {
  const query =
    gql`
    query getBussineesByCategory {
      businessLists(where: { category: { name: "` +
    category +
    `" } }) {
        about
        address
        category {
          name
        }
        images {
          url
        }
        contactPerson
        email
        id
        name
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getBusinessById = async (id) => {
  const query =
    gql`
    query getBusinessById {
      businessList(where: { id: "` +
    id +
    `" }) {
        about
        address
        category {
          name
        }
        contactPerson
        email
        id
        name
        images {
          url
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const createNewBooking = async (
  businessId,
  date,
  time,
  userEmail,
  userName
) => {
  const mutationQuery =
    gql`
    mutation CreateBooking {
      createBooking(
        data: {
          bookingStatus: booked
          businessList: { connect: { id: "` +
    businessId +
    `" } }
          date: "` +
    date +
    `"
          time: "` +
    time +
    `"
          userEmail: "` +
    userEmail +
    `"
          userName: "` +
    userName +
    `"
        }
      ) {
        id
      }
        publishManyBookings(to: PUBLISHED) {
    count
  }
    }
  `;

  const result = await request(MASTER_URL, mutationQuery);
  return result;
};

const getBookedSlot = async (businessId, date) => {
  const query =
    gql`
    query BookedSlot {
      bookings(where: { businessList: { id: "` +
    businessId +
    `" }, date: "` +
    date +
    `" }) {
        date
        time
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getUserBooking = async (userEmail) => {
  const query =
    gql`
    query GetUserBookings {
      bookings(where: { userEmail: "` +
    userEmail +
    `" }, orderBy: publishedAt_DESC) {
        businessList {
          name
          images {
            url
          }
          contactPerson
          address
        }
        date
        time
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export {
  getCategory,
  getAllBusiness,
  getBussinessByCategory,
  getBusinessById,
  createNewBooking,
  getBookedSlot,
  getUserBooking,
};
