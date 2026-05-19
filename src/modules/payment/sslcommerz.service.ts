import axios from "axios";
import { AppError } from "../../utils/app_error";
import { env } from "../../configs/env";

type InitPaymentPayload = {
  totalAmount: number;
  transactionId: string;
  customerName: string;
  customerEmail?: string | null;
  customerPhone: string;
  customerAddress?: string | null;
  productName: string;
};

// normalize value to string to handle boolean or string env values
const isLive = String(env.sslcommerzIsLive).toLowerCase() === "true";

const baseUrl = isLive
  ? "https://securepay.sslcommerz.com"
  : "https://sandbox.sslcommerz.com";

const initPayment = async (payload: InitPaymentPayload) => {
  const formData = new URLSearchParams();

  formData.append("store_id", env.sslcommerzStoreId as string);
  formData.append("store_passwd", env.sslcommerzStorePassword as string);
  formData.append("total_amount", String(payload.totalAmount));
  formData.append("currency", "BDT");
  formData.append("tran_id", payload.transactionId);

  formData.append(
    "success_url",
    `${env.backendUrl}/api/v1/payments/sslcommerz/success`
  );
  formData.append(
    "fail_url",
    `${env.backendUrl}/api/v1/payments/sslcommerz/fail`
  );
  formData.append(
    "cancel_url",
    `${env.backendUrl}/api/v1/payments/sslcommerz/cancel`
  );
  formData.append(
    "ipn_url",
    `${env.backendUrl}/api/v1/payments/sslcommerz/ipn`
  );

  formData.append("cus_name", payload.customerName);
  formData.append("cus_email", payload.customerEmail || "customer@example.com");
  formData.append("cus_add1", payload.customerAddress || "Dhaka");
  formData.append("cus_city", "Dhaka");
  formData.append("cus_country", "Bangladesh");
  formData.append("cus_phone", payload.customerPhone);

  formData.append("shipping_method", "NO");
  formData.append("product_name", payload.productName);
  formData.append("product_category", "Healthcare");
  formData.append("product_profile", "non-physical-goods");

  const { data } = await axios.post(
    `${baseUrl}/gwprocess/v4/api.php`,
    formData,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  if (data?.status !== "SUCCESS" || !data?.GatewayPageURL) {
    throw new AppError("Failed to initiate SSLCommerz payment", 400);
  }

  return data;
};

const validatePayment = async (validationId: string) => {
  const { data } = await axios.get(`${baseUrl}/validator/api/validationserverAPI.php`, {
    params: {
      val_id: validationId,
      store_id: env.sslcommerzStoreId,
      store_passwd: env.sslcommerzStorePassword,
      format: "json",
    },
  });

  return data;
};

export const sslcommerzService = {
  initPayment,
  validatePayment,
};