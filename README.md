# ReactBlogApp

A lightweight blog application built with React!

## Overview

ReactBlogApp is a platform for users to read and create blog posts, facilitating communication and knowledge sharing within the community. It provides a simple yet functional experience, allowing users to view blog posts, add new posts, and manage their content efficiently.

This project serves as a practice exercise for reinforcing my React fundamentals before moving on with the intermediate part of the course.

## Features

- **View Blog Posts:** Users can browse through a list of blog posts, each displaying a title, content, and author information.
- **Add New Posts:** Adding new blog posts is intuitive with a form provided for users to input their content.
- **Delete Posts:** For content management, users can delete individual blog posts they have created, providing them with control over their contributions.

## Enhancements

### Sort Functionality

I've implemented a sort feature that allows users to sort blog posts based on specific criteria, such as author,title or input.

### Clear All Button

I've added a "Clear All" button, providing users with a convenient way to delete all blog posts at once. This streamlines content management and improves usability, especially for users looking to start fresh or clean up their content.

### Local Storage

I got a feedback on twitter on implementing local storage. I followed an article that made use of useEffect which I haven't actually learnt about.

## Implementation Details

- **Clear All Button:** Implemented as a `ClearAllButton` component, triggering the deletion of all blog posts when clicked.

## Usage

To use ReactBlogApp locally, follow these steps:

1. Clone the repository: `git clone https://github.com/DevHeris/ReactBlogApp.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Next Steps

I will continue to gather user feedback and monitor usage patterns to identify further areas for improvement and refinement. Future enhancements may include additional filter options, such as date range filtering, and advanced content management features based on user demand.

## Contributions

If you have any ideas for improvements or new features, feel free to submit a pull request or open an issue.
