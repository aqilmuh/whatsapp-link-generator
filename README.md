# WhatsApp Link Generator

A simple, lightweight web tool that generates direct WhatsApp chat links — no contact saving required.

---

## The Problem

Normally, someone can only message you on WhatsApp if they've saved your number in their contacts first. This creates friction, especially for businesses or anyone sharing their number publicly.

This tool solves that by generating a direct link that opens a WhatsApp chat immediately when clicked.

---

## How to Use

1. Select your **country code** from the dropdown
2. Enter your **WhatsApp number** without the leading zero
3. Optionally type a **pre-filled message** that will appear in the chat box
4. Click **Generate Link**
5. Copy and share the link anywhere — social media, email, website, business card QR code, etc.

---

## How It Works

The tool constructs a URL using WhatsApp's official link scheme:

```
https://wa.me/{countrycode}{number}?text={message}
```

- `{countrycode}` — the numeric country code, e.g. `62` for Indonesia
- `{number}` — the phone number without leading zero, e.g. `8123456789`
- `{message}` — optional pre-filled text, encoded using URI encoding

If no message is provided, the `?text=` part is omitted:

```
https://wa.me/{countrycode}{number}
```

### URI Encoding

Special characters in the message (spaces, punctuation, etc.) are converted to URL-safe format using `encodeURIComponent()`. For example:

| Original | Encoded |
|----------|---------|
| `Hello World` | `Hello%20World` |
| `Hi! How are you?` | `Hi!%20How%20are%20you%3F` |

---

## Example

| Field | Value |
|-------|-------|
| Country | Indonesia (+62) |
| Number | 8123456789 |
| Message | Hello, I'd like to know more! |

**Generated link:**
```
https://wa.me/628123456789?text=Hello%2C%20I'd%20like%20to%20know%20more!
```
