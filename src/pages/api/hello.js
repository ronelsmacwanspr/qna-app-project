// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { useDataContext } from "@/context/dataContext"

export default function handler(req, res) {
  res.status(200).json({gg:'dede'});
 // res.status(200).json({ name: 'John Doe' })
}
