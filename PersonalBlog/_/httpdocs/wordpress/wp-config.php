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
define('DB_NAME', 'wordpress_c46');

/** MySQL database username */
define('DB_USER', 'wordpress_0f');

/** MySQL database password */
define('DB_PASSWORD', '13mKce#DW5');

/** MySQL hostname */
define('DB_HOST', '182.50.133.83:3306');

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
define('AUTH_KEY',         'PS6vke*iHZvlS1U5qGi7MCtmC4YL0CP05y3ppPzhCDmirrp3tu6T46vsc5m!IBHz');
define('SECURE_AUTH_KEY',  '9egy#DP#7cnHv&jXV*yzzmLS88Gou(i4wtZWJGuxE*U#V^#ZbfPtjAJ56o@ySa7y');
define('LOGGED_IN_KEY',    'Jm40N!Ni%1367R2Q3jjCswROvLt8h^tGrhk7blJbe(fOkUgnVc#T0&k%YqHEJ1(I');
define('NONCE_KEY',        'fK#ci9*DplzjzoolE)78Yh4uC07UOm2IEiKU22KrfWkjj2etB0Y7bTADdTUzk)dl');
define('AUTH_SALT',        '13#SiWJBixNwN^#jriJq9TTlvxfEr3gB8Vphs(OM0IHAFTiRkocYeUHy4k0!ag3a');
define('SECURE_AUTH_SALT', 'qKRrZF4wsG56wTB@Bt&QFggz%o8V%KPM2MFy2sXhR(qRt!2Fp8^Zb(!#j2(9Vojt');
define('LOGGED_IN_SALT',   '(MnJJ&DlifFM&&A8Vcn0snBX5z1VjLPPuL4e#Vumg(4L)XzWv2ZSDdWy8Cb#iCd#');
define('NONCE_SALT',       'T7NAf9T@O0r44K7HQB0kSAbl)@Hc4L#o2s#8^bgKu1idK*(S2htMbQjVZeWquAsZ');
/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = '6JX9x4m_';

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
