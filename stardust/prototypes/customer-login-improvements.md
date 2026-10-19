<!--
_provenance:
  writtenBy: stardust:direct
  writtenAt: 2026-10-19T18:55:00Z
  readArtifacts:
    - stardust/current/pages/customer-login.json
    - stardust/current/_computed-styles.json
    - stardust/current/brand-review.html#tensions
  stardustVersion: 0.29.1
-->

# Improvements — customer-login (sign in)

1. **[ia-clutter]** Auth vocabulary is fragmented across the header ("Sign in", "Log in", "Registration", "Combined Auth"; `T-nav-conflict`), while the page itself says "Sign in".
   *Fix:* Use "Sign in" as the one visible label for the action. Registration is presented as "Create Company Account" (the existing `/customer/company/create` route) next to the form.

2. **[dated-pattern]** The form is a lone centred column with a dark-grey pill "Sign in" (24px radius) and weight-300 labels.
   *Fix:* A two-panel layout on ≥900px. The left panel is the sign-in form: square inputs, visible caption-style labels, Power Red "Sign in". The right panel is a navy "New to Supermicro?" band with "Create Company Account" and a "Create an account" text link to `/customer/create`. On mobile they stack, form first.

3. **[contrast]** The password show/hide toggle is an icon-only control ("Click to show password" exists only as an accessible name). Its focus state and hit area are not designed.
   *Fix:* A 44×44px toggle inside the field with a visible focus ring (2px Signal Blue). The accessible name is kept verbatim.

4. **[missed-opportunity]** "Forgot password?" is the only secondary path, and there is no reassurance about what a company account unlocks.
   *Fix:* One Spec Grey line under the form title, sourced from the storefront's existing capabilities (company accounts, quick order, order search). No invented benefits or claims.
