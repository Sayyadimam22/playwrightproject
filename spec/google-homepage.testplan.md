# Google Homepage Test Plan

## Application Overview

Test plan for Google homepage functionality, covering page load, search input, navigation links, and footer actions.

## Test Scenarios

### 1. Google Homepage Functional Tests

**Seed:** `tests/seed.spec.ts`

#### 1.1. Homepage load and core UI elements

**File:** `spec/google-homepage.testplan.md`

**Steps:**
  1. -
    - expect: The browser navigates to https://www.google.com/
    - expect: The page title contains "Google"
    - expect: The Google logo is visible
    - expect: The search input is visible
    - expect: The "Google Search" button is visible
    - expect: The "I'm Feeling Lucky" button is visible

#### 1.2. Search query returns results

**File:** `spec/google-homepage.testplan.md`

**Steps:**
  1. Enter "Playwright" into the Google search input
    - expect: The search input contains "Playwright"
  2. Click the "Google Search" button or press Enter
    - expect: The page URL contains "/search"
    - expect: Search results are visible
    - expect: At least one result contains the search term "Playwright"

#### 1.3. I'm Feeling Lucky navigation

**File:** `spec/google-homepage.testplan.md`

**Steps:**
  1. Enter "Playwright" into the Google search input
    - expect: The search input contains "Playwright"
  2. Click the "I'm Feeling Lucky" button
    - expect: The browser navigates away from the homepage
    - expect: The URL changes to a result or landing page
    - expect: The page loads successfully with a visible title or heading

#### 1.4. Top navigation links open expected pages

**File:** `spec/google-homepage.testplan.md`

**Steps:**
  1. Click the "Gmail" link in the top navigation
    - expect: The browser opens the Gmail page
    - expect: The URL contains "mail.google.com" or the Gmail sign-in page is visible
  2. Navigate back to Google homepage if needed
    - expect: The homepage loads successfully
  3. Click the "Images" link in the top navigation
    - expect: The browser opens Google Images
    - expect: The URL contains "/imghp" or the image search page is visible

#### 1.5. Footer privacy and terms links

**File:** `spec/google-homepage.testplan.md`

**Steps:**
  1. Scroll to the footer
    - expect: The footer is visible
  2. Click the "Privacy" link
    - expect: The browser navigates to the Google privacy page
    - expect: The URL contains "policies.google.com/privacy"
  3. Return to the homepage
    - expect: The homepage is visible again
  4. Click the "Terms" link
    - expect: The browser navigates to the Google terms page
    - expect: The URL contains "policies.google.com/terms"
