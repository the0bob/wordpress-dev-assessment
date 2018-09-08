Full Stack Developer Assessment

This is a Wordpress implementation with a contact form which posts to the Airtable API as well as sending an email notification.

It is containerized for convenience. To get up and running, make a copy of ".env.example" named ".env" and modify the resulting file if desired.

https://github.com/the0bob/wordpress-dev-assessment

In a production situation, you would want to create appropriate DNS records for your website domain to ensure outgoing emails don't get marked as spam.

Here's some references.

Used some pretty basic plugin and extensions...

To set up the form:
https://wordpress.org/plugins/cf7-to-api/

To POST to Airtable:
https://wordpress.org/plugins/cf7-to-api-basic-auth/

To redirect to the "Thank You" page:
https://wordpress.org/plugins/wpcf7-redirect/

To add logic to the "Thank You" page:
https://wordpress.org/plugins/insert-php-code-snippet/

Grabbed a list of state codes from...
http://ageekandhisblog.com/text-copy-friendly-list-of-us-states-and-abbreviation/

Containerized the solution...
https://hub.docker.com/_/wordpress/
https://docs.docker.com/compose/wordpress/

And (as expected) had to tweak the Dockerfile to get emails to send...
https://github.com/docker-library/wordpress/issues/30

I decided to make the site URL an environment variable and pass it into wp-config.php.


Wishlist (things I would need more time to implement):
- modify site URL in database directly with an entrypoint script
- enable serving over https
- get docker to run in EC2 instance without having to 'sudo' every command
- make docker service and running container persist on system reboot
- have a script to save/retrieve database and images from s3 (or some other storage service), then .gitignore the database and images
