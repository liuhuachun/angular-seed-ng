import { BuildType } from './seed.config.interfaces';
/**
 * The enumeration of available environments.
 * @type {Environments}
 */
export const BUILD_TYPES: BuildType = {
  DEVELOPMENT: 'dev',
  PRODUCTION: 'prod'
};

export class SeedConfig {

  /**
   * The path for the base of the application at runtime.
   * The default path is based on the environment '/',
   * which can be overriden by the `--base` flag when running `npm start`.
   * @type {string}
   */
  public static APP_BASE = '/';

  /**
   * The current build type.
   * The default build type is `dev`, which can be overriden by the `--build-type dev|prod` flag when running `npm start`.
   */
  public static BUILD_TYPE  = getBuildType();

  /**
   * The flag for the targeting of desktop option of the application.
   * Per default the option is false.
   * @type {boolean}
   */
  public static TARGET_DESKTOP = false;

  /**
   * The flag for the targeting of desktop build option of the application.
   * Per default the option is false.
   * @type {boolean}
   */
  public static TARGET_DESKTOP_BUILD = false;

  /**
   * The flag for the targeting of mobile hybrid option of the application.
   * Per default the option is false and not currently supported but may be in the future.
   * @type {boolean}
   */
  public static TARGET_MOBILE_HYBRID = false;

  /**
   * The directory where the bootstrap file is located.
   * The default directory is `app`.
   * @type {string}
   */
  public static BOOTSTRAP_DIR =  'app';

  /**
   * The bootstrap file to be used to boot the application.
   * @type {string}
   */
  public static BOOTSTRAP_MODULE = `${SeedConfig.BOOTSTRAP_DIR}/main`;
}

/**
 * Returns the application build type.
 */
function getBuildType() {
  return BUILD_TYPES.DEVELOPMENT;
}
