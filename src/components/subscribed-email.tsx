import * as React from "react";

interface SubscribedEmailProps {
  unsubscribeLink: string;
}

export const SubscribedEmail: React.FC<Readonly<SubscribedEmailProps>> = ({
  unsubscribeLink,
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      fontSize: "14px",
      lineHeight: "1.6",
      color: "#333",
    }}
  >
    <table
      width="100%"
      cellPadding="0"
      cellSpacing="0"
      style={{ backgroundColor: "#f5f5f5", padding: "20px" }}
    >
      <tr>
        <td>
          <table
            width="600"
            align="center"
            cellPadding="0"
            cellSpacing="0"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "4px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <tr>
              <td style={{ padding: "40px" }}>
                <h1
                  style={{
                    fontSize: "24px",
                    marginBottom: "20px",
                    color: "#1C3658",
                  }}
                >
                  Welcome to Crafter Station!
                </h1>
                <p style={{ marginBottom: "20px" }}>
                  Thank you for subscribing. We&apos;re thrilled to have you on
                  board!
                </p>
                <p style={{ marginBottom: "20px" }}>
                  As a subscriber, you&apos;ll be the first to know about our
                  latest products, updates, and exclusive offers.
                </p>
                <p
                  style={{ marginTop: "30px", fontSize: "12px", color: "#999" }}
                >
                  Stay connected with us on social media: Follow us on 𝕏:
                  <br />
                  <a
                    href="https://twitter.com/@crafterstation"
                    style={{ color: "#999", textDecoration: "underline" }}
                  >
                    @crafterstation
                  </a>
                  , and
                  <a
                    href="https://twitter.com/"
                    style={{ color: "#999", textDecoration: "underline" }}
                  >
                    @chrisuworld
                  </a>
                  .
                </p>
                <p
                  style={{ marginTop: "30px", fontSize: "12px", color: "#999" }}
                >
                  If you wish to unsubscribe, you can do so at any time by
                  clicking{" "}
                  <a
                    href={unsubscribeLink}
                    style={{ color: "#999", textDecoration: "underline" }}
                  >
                    here
                  </a>
                  .
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
);
