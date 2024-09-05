# Client Blog Application

## Storybook deploy: 
https://66d48c6e5c3a31055ed1e754-ortcbwrspk.chromatic.com/?path=/story/components-select--default

## Screens Description

1. **Home Page**
    - Features a top block for page navigation and a video modal.
    - Implements infinite scroll for content loading.
    - Includes sections such as "Step-by-step," "Featured Post," "All Posts," "About Us," "Choose A Category," "Why we started," "List of Authors," "TESTIMONIALS," and "Join our team."

2. **Blog Page**
    - Allows navigation between posts and includes pagination.
    - Provides access to individual blog post pages and categories.

3. **Blog Post Page**
    - Displays the content of a specific post.
    - Includes a "What to read next" section for related posts.
    - Features a subscription form for newsletters.

4. **About Us Page**
    - Lists authors and provides detailed information about each author.

5. **Category Page**
    - Allows users to filter posts by tags and view alternative text if no results are found.

6. **Author Page**
    - Displays author information and social media links.
    - Shows a list of posts written by the author, or an alternative text if no posts are found.

7. **Contact Page**
    - Contains a contact form that sends messages to a specified email address.
    - Features an interactive map with markers in different locations.

8. **Privacy Policy Page**
    - Provides information about the application's privacy policy.

## Environment Variables

### EmailJS Configuration

- **`NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`**:
    - **Description**: Public key for EmailJS.

- **`NEXT_PUBLIC_EMAILJS_SERVICE_ID`**:
    - **Description**: Service ID for EmailJS.

- **`NEXT_PUBLIC_EMAILJS_SUBSCRIBE_TEMPLATE_ID`**:
    - **Description**: Template ID for the subscription form.

- **`NEXT_PUBLIC_EMAILJS_CONTACTS_TEMPLATE_ID`**:
    - **Description**: Template ID for the contacts form.

### Mapbox Configuration

- **`NEXT_PUBLIC_MAPBOX_KEY`**:
    - **Description**: Public access token for Mapbox.

### Server API

- **`NEXT_PUBLIC_SERVER_API`**:
    - **Description**: Base URL for the server API.
    - **URL**: `https://client-blog-server-six.vercel.app`
## Usage

Make sure to add these environment variables to `.env` file.
