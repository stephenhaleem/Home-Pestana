# Booking Inquiry Feature Setup Guide

## Overview
Users can now book apartments or inquire about availability directly on the apartment detail page. The form captures:
- Guest name & email
- Phone number (optional)
- Check-in and check-out dates
- Custom message

Submissions are sent via email to your configured site email address.

## Setup Instructions

### 1. Configure Your Email Address
Update your `.env.local` and `.env.production` files:

```env
VITE_SITE_EMAIL=your-email@example.com
```

Replace `your-email@example.com` with the email address where you want to receive booking inquiries.

### 2. Email Service Setup (Optional but Recommended)

#### Option A: Using Resend (Easiest)
1. Sign up at [https://resend.com](https://resend.com)
2. Get your API key
3. Add to your `.env.local` and `.env.production`:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

#### Option B: Without Email Service
Booking inquiries are logged to console. You can manually check server logs or implement your own email service.

#### Option C: Custom Email Service
Edit `src/routes/api.booking-inquiry.ts` and replace the Resend integration with:
- SendGrid
- Mailgun
- Nodemailer
- Firebase Email
- AWS SES

### 3. Deploy to Cloudflare Workers

Add environment variables to your Cloudflare project:

```bash
wrangler secret put VITE_SITE_EMAIL
wrangler secret put RESEND_API_KEY
```

Then deploy:
```bash
npm run build
npx nitro deploy --prebuilt
```

## Features

✅ **Date Picker** - Users select check-in and check-out dates
✅ **Form Validation** - Required fields checked client-side
✅ **Email Formatting** - Professionally formatted HTML emails
✅ **Success Feedback** - Users see confirmation message
✅ **Mobile Responsive** - Works on all devices
✅ **Error Handling** - Graceful error messages

## Testing Locally

1. Start dev server:
   ```bash
   npm run dev
   ```

2. Go to any apartment page
3. Fill out the booking form
4. Submit
5. Check your console logs or email inbox

## Email Content

Inquiries include:
- Apartment name
- Guest contact information
- Selected dates (check-in/check-out)
- Any custom message
- Direct reply-to guest email

## Troubleshooting

**"Inquiry Sent Successfully" appears but no email received:**
- Check `.env.local` has `VITE_SITE_EMAIL` set
- If using Resend, verify `RESEND_API_KEY` is valid
- Check spam/promotions folder
- Check server logs

**Form validation errors:**
- Ensure all required fields (name, email, dates) are filled
- Email must be valid format
- Check-out date should be after check-in date

**"Failed to send inquiry" error:**
- API endpoint may not be responding
- Check server logs for errors
- Verify `.env` variables are set
- Check internet connection

## File Structure

- `src/components/site/BookingForm.tsx` - React form component
- `src/routes/api.booking-inquiry.ts` - Backend API endpoint
- `src/components/site/ApartmentDetail.tsx` - Form integrated here

---

**Need to customize?** Edit the form in `BookingForm.tsx` or the email template in `api.booking-inquiry.ts`.
