import { useState } from "react";
import toast from "react-hot-toast";

const OrderDetails = ({ total, createOrder, setCash }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formErrors, setFormErrors] = useState({
    customer: "",
    address: "",
    phoneNumber: "",
  });
  const [loading, setLoading] = useState(false);

  const validateInputs = () => {
    const errors = {};

    if (!customer || customer.trim().length < 2) {
      errors.customer = "Customer name should be at least 2 characters long.";
    }

    if (!address || address.trim().length < 5) {
      errors.address = "Address should be at least 5 characters long.";
    }

    if (
      !phoneNumber ||
      phoneNumber.length !== 10 ||
      !/^\d+$/.test(phoneNumber)
    ) {
      errors.phoneNumber = "Phone number should be exactly 10 digits long.";
    }

    setFormErrors(errors);
    return errors;
  };

  const handleSubmitOrder = async () => {
    try {
      setLoading(true);

      // Reset Form Errors
      setFormErrors({
        customer: "",
        address: "",
        phoneNumber: "",
      });

      const currentErrors = validateInputs();

      if (
        !currentErrors.hasOwnProperty("customer") &&
        !currentErrors.hasOwnProperty("address") &&
        !currentErrors.hasOwnProperty("phoneNumber")
      ) {
        createOrder({ customer, address, total, method: 0 });
        setCash(false);
        toast.success("Successfully placed order! You will be redirected shortly...")
      } else {
        console.log(currentErrors, formErrors)
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    // Container
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-gray-600/50 text-black">
      <div className="w-[500px] gap-2 bg-white rounded-md p-12 flex flex-col items-center justify-center">
        {/* Title */}
        <h1 className="font-semibold text-xl">
          You will pay ${total}.00 after delivery.
        </h1>
        {/* Name Input */}
        <div className="flex flex-col w-[100%]">
          <label htmlFor="Customer Name">
            Name
            {formErrors?.customer && (
              <span className="ml-4 text-red-600 font-semibold text-sm">
                {formErrors.customer}
              </span>
            )}
          </label>
          <input
            className={formErrors.customer ? "border-2 border-red-600" : ""}
            onChange={(e) => setCustomer(e.target.value)}
            value={customer}
            type="text"
            placeholder="John Doe"
            id="name"
            name="name"
          />
        </div>
        {/* Address Input */}
        <div className="flex flex-col w-[100%]">
          <label htmlFor="address">
            Address{" "}
            {formErrors?.address && (
              <span className="ml-4 text-red-600 font-semibold text-sm">
                {formErrors.address}
              </span>
            )}
          </label>
          <input
            className={formErrors.address ? "border-2 border-red-600" : ""}
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            type="text"
            placeholder="Address"
            id="address"
            name="address"
          />
        </div>

        {/* Phone Number Input */}
        <div className="flex flex-col w-[100%]">
          <label htmlFor="">
            Phone Number{" "}
            {formErrors?.phoneNumber && (
              <span className="ml-4 text-red-600 font-semibold text-sm">
                {formErrors.phoneNumber}
              </span>
            )}
          </label>
          <input
            className={formErrors.phoneNumber ? "border-2 border-red-600" : ""}
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            type="tel"
            placeholder="1234567890"
            id="phone_number"
            name="phone_number"
          />
        </div>
        <div className="w-[70%] mt-6 flex justify-between">
          <button
            onClick={() => setCash(false)}
            className="bg-gray-300 text-gray-900 py-3 px-5 font-semibold text-2xl sm:text-xl rounded-md hover:underline ease-linear duration-200"
          >
            Cancel
          </button>
          <button
            disabled={loading}
            onClick={handleSubmitOrder}
            className="disabled:bg-white bg-gray-900 text-white py-3 px-5 font-semibold text-2xl sm:text-xl rounded-md hover:underline ease-linear duration-200"
          >
            {loading ? "Ordering..." : "Order"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
