<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress_13');

/** MySQL database username */
define('DB_USER', 'wordpress_f1');

/** MySQL database password */
define('DB_PASSWORD', 'yJOk_2S8l9');

/** MySQL hostname */
define('DB_HOST', '182.50.133.81:3306');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'I8Pv*8PP&&(Z&sJzCuG@8PmapNvxTp)zv(#YlXN8Ekdf68#Utg*c1h)!tsIVpXH0');
define('SECURE_AUTH_KEY',  'O6&xF4TBvB)qYxOwY^jrdx3Kn(rVIepHgaqOWy)bqFWO!K!MoEd4*YkG@!#4RwJ6');
define('LOGGED_IN_KEY',    'zJ#jE0#((%mc0%jtw&3B4&AMu@5mq@d00hi*v!vL)cuw%NF*t3NBcbYG6Fi9bJnm');
define('NONCE_KEY',        '**FfdtW3CgK1vj6Q*&&@pTkmtG5DfP*U3@&rwvium^*MtuV78JxJV(x1tIqjR6NF');
define('AUTH_SALT',        '84x2X^Gg6h3rp2q1t5^E(ZV2@LRoI18Lt^ayng2QQ02d%hB83rxvbsizy0*fbkdq');
define('SECURE_AUTH_SALT', '5MQf9TBCSdwaOEut#Q*1YVgJA3^VOf8VoPi4CoXqMTUXyPuZA9Qhoq11i*o!vKn9');
define('LOGGED_IN_SALT',   'mTNW8ldaf5Vs6pbFN#queJBIf#a%HqGz))l4k%vg3t7V4caM3Y%ddvg1Mlf@KZsc');
define('NONCE_SALT',       'EqMDw1rZa81QXmz1s!#yqK9^jveg6O*qI5ub&Kr1Md7KG1ahkbfhPeSDQA4YjOg0');
/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = '6J6t5Xz_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

define( 'WP_ALLOW_MULTISITE', true );

define ('FS_METHOD', 'direct');
