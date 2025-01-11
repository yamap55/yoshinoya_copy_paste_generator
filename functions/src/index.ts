import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();
const db = admin.firestore();

export const incrementCounter = functions.https.onRequest(
  {
    region: "asia-northeast1",
  },
  async (req, res) => {
    const counterRef = db.collection("counters").doc("visitorCounter");

    try {
      await db.runTransaction(async (transaction) => {
        const counterDoc = await transaction.get(counterRef);

        let count = 0;
        if (counterDoc.exists) {
          count = counterDoc.data()?.count || 0;
        }
        count += 1;

        transaction.set(counterRef, { count });
      });

      const counterDoc = await counterRef.get();
      res.status(200).json({ visitor_number: counterDoc.data()?.count });
    } catch (error) {
      console.error("Error incrementing counter:", error);
      res.status(500).send("Internal Server Error");
    }
  },
);
