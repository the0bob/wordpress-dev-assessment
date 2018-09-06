Full Stack Developer Assessment

This is a Wordpress implementation with a contact form which posts to the Airtable API as well as sending an email notification. It is containerized for convenience.

In a production situation, you would want to create appropriate DNS records for your website domain to ensure outgoing emails don't get marked as spam.

Here's some references.

Used a pretty basic plugin and extensions...
https://wordpress.org/plugins/cf7-to-api/
https://wordpress.org/plugins/cf7-to-api-basic-auth/
https://wordpress.org/plugins/wpcf7-redirect/

Grabbed a list of state codes from...
http://ageekandhisblog.com/text-copy-friendly-list-of-us-states-and-abbreviation/

Containerized the solution...
https://hub.docker.com/_/wordpress/
https://docs.docker.com/compose/wordpress/

And (as expected) had to tweak the Dockerfile to get emails to send...
https://github.com/docker-library/wordpress/issues/30
