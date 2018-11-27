OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Не удалось очистить соответствия.",
    "Failed to delete the server configuration" : "Не удалось удалить конфигурацию сервера",
    "Invalid configuration: Anonymous binding is not allowed." : "Неверная конфигурация: анонимное связывание не разрешается.",
    "Valid configuration, connection established!" : "Конфигурация настроена верно, связь установлена!",
    "Valid configuration, but binding failed. Please check the server settings and credentials." : "Конфигурация настроена верно, но связывание не удалось. Проверьте настройки сервера и реквизиты доступа.",
    "Invalid configuration. Please have a look at the logs for further details." : "Неверная конфигурация. Просмотрите журналы для получения дополнительных сведений.",
    "No action specified" : "Действие не указано",
    "No configuration specified" : "Конфигурация не указана",
    "No data specified" : "Нет данных",
    " Could not set configuration %s" : "Невозможно создать конфигурацию %s",
    "Action does not exist" : "Действия не существует",
    "LDAP user and group backend" : "Интерфейс пользователей и групп LDAP",
    "Renewing …" : "Обновление…",
    "Very weak password" : "Очень слабый пароль",
    "Weak password" : "Слабый пароль",
    "So-so password" : "Так себе пароль",
    "Good password" : "Хороший пароль",
    "Strong password" : "Надёжный пароль",
    "The Base DN appears to be wrong" : "База поиска DN по всей видимости указана неправильно",
    "Testing configuration…" : "Проверка конфигурации…",
    "Configuration incorrect" : "Конфигурация некорректна",
    "Configuration incomplete" : "Конфигурация не завершена",
    "Configuration OK" : "Конфигурация в порядке",
    "Select groups" : "Выберите группы",
    "Select object classes" : "Выберите объектные классы",
    "Please check the credentials, they seem to be wrong." : "Пожалуйста проверьте учетный данные, возможно они не верны.",
    "Please specify the port, it could not be auto-detected." : "Пожалуйста укажите порт, он не может быть определен автоматически.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "База поиска не может быть определена автоматически, пожалуйста перепроверьте учетные данные, адрес и порт.",
    "Could not detect Base DN, please enter it manually." : "Не возможно обнаружить Base DN, пожалуйста задайте в ручную.",
    "{nthServer}. Server" : "Сервер {nthServer}.",
    "No object found in the given Base DN. Please revise." : "Не найдено объектов в Base DN. Пожалуйста перепроверьте.",
    "More than 1,000 directory entries available." : "В каталоге доступно более 1,000 записей.",
    "_{objectsFound} entry available within the provided Base DN_::_{objectsFound} entries available within the provided Base DN_" : ["{objectsFound} элемент доступен в предоставленном базовом DN","{objectsFound} элементов доступно в предоставленном базовом DN","{objectsFound} элементов доступно в предоставленном базовом DN","{objectsFound} элементов доступно в предоставленном базовом DN"],
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "Произошла ошибка. Пожалуйста проверьте базу поиска DN, а также настройки подключения и учетные данные.",
    "Do you really want to delete the current Server Configuration?" : "Вы действительно хотите удалить существующую конфигурацию сервера?",
    "Confirm Deletion" : "Подтверждение удаления",
    "Mappings cleared successfully!" : "Соответствия успешно очищены!",
    "Error while clearing the mappings." : "Ошибка при очистке соответствий.",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "Анонимная связь не разрешается. Пожалуйста укажите DN пользователя и пароль.",
    "LDAP Operations error. Anonymous bind might not be allowed." : "Ошибка операций LDAP. Возможно анонимная связь не разрешена.",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "Не удается произвести сохранение. Пожалуйста убедитесь, что база данных функционирует. Перезагрузитесь перед продолжением.",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "Переключение режима задействует автоматические запросы LDAP. В зависимости от размера LDAP это может занять много времени. Вы все еще желаете переключить режим?",
    "Mode switch" : "Переключение режима",
    "Select attributes" : "Выберите атрибуты",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command-line validation): <br/>" : "Пользователь не найден. Проверьте данные для входа и имя пользователя.  Действующий фильтр (для копирования и вставки при проверке в командой строке): <br/>",
    "User found and settings verified." : "Пользователь найден и настройки проверены.",
    "Consider narrowing your search, as it encompassed many users, only the first one of whom will be able to log in." : "Подумайте о сужении поиска, поскольку он охватывает многих пользователей, но только первый из которых сможет войти в систему.",
    "An unspecified error occurred. Please check log and settings." : "Произошла неуказанная ошибка.  Проверьте настройки и журнал.",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "Некорректный фильтр поиска, возможно из-за синтаксических проблем, таких как несоответствие открывающих и закрывающих скобок. Пожалуйста проверьте.",
    "A connection error to LDAP / AD occurred, please check host, port and credentials." : "Произошла ошибка подключения к LDAP / AD, пожалуйста проверьте настройки подключения и учетные данные.",
    "The \"%uid\" placeholder is missing. It will be replaced with the login name when querying LDAP / AD." : "Отсутствует заполнитель «%uid». Он будет заменен на логин при запросе к LDAP / AD.",
    "Please provide a login name to test against" : "Пожалуйста укажите логин для проверки",
    "The group box was disabled, because the LDAP / AD server does not support memberOf." : "Настройка групп была отключена, так как сервер LDAP / AD не поддерживает memberOf.",
    "Password change rejected. Hint: " : "Смена пароля отклонена. Подсказка:",
    "Please login with the new password" : "Войдите в систему со своим новым паролем",
    "Your password will expire tomorrow." : "Завтра истекает срок действия пароля.",
    "Your password will expire today." : "Сегодня истекает срок действия пароля.",
    "_Your password will expire within %n day._::_Your password will expire within %n days._" : ["Срок действия пароля истекает через %n день.","Срок действия пароля истекает через %n дня.","Срок действия пароля истекает через %n дней.","Срок действия пароля истекает через %n день."],
    "LDAP / AD integration" : "Интеграция LDAP / AD",
    "_%s group found_::_%s groups found_" : ["%s группа найдена","%s группы найдены","%s групп найдено","%s групп найдено"],
    "_%s user found_::_%s users found_" : ["%s пользователь найден","%s пользователя найдено","%s пользователей найдено","%s пользователей найдено"],
    "Could not detect user display name attribute. Please specify it yourself in advanced LDAP settings." : "Не удалось автоматически определить атрибут, содержащий отображаемое имя пользователя. Зайдите в расширенные настройки LDAP и укажите его вручную.",
    "Could not find the desired feature" : "Не удается найти требуемую функциональность",
    "Invalid Host" : "Некорректный адрес сервера",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory." : "Это приложение позволяет администраторам подключать Nextcloud к каталогу пользователей на основе LDAP.",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory for authentication and provisioning users, groups and user attributes. Admins can configure this application to connect to one or more LDAP directories or Active Directories via an LDAP interface. Attributes such as user quota, email, avatar pictures, group memberships and more can be pulled into Nextcloud from a directory with the appropriate queries and filters.\n\nA user logs into Nextcloud with their LDAP or AD credentials, and is granted access based on an authentication request handled by the LDAP or AD server. Nextcloud does not store LDAP or AD passwords, rather these credentials are used to authenticate a user and then Nextcloud uses a session for the user ID. More information is available in the LDAP User and Group Backend documentation." : "Это приложение позволяет администраторам подключать Nextcloud к каталогу пользователей на основе LDAP для аутентификации и подготовки пользователей, групп и пользовательских атрибутов. Администраторы могут настроить это приложение для подключения к одному или нескольким каталогам LDAP или Active Directory через интерфейс LDAP. Атрибуты, такие как пользовательская квота, электронная почта, изображения аватаров, членство в группах и многое другое, могут быть перенесены в Nextcloud из каталога с соответствующими запросами и фильтрами.\n\nПользователь регистрируется в Nextcloud со своими учетными данными LDAP или AD и получает доступ на основе запроса аутентификации, обрабатываемого сервером LDAP или AD. Nextcloud не хранит пароли LDAP или AD, а эти учетные данные используются для аутентификации пользователя, а затем Nextcloud использует сеанс для идентификатора пользователя. Дополнительная информация доступна в документации LDAP Пользователи и Группы.",
    "Test Configuration" : "Проверить конфигурацию",
    "Help" : "Помощь",
    "Groups meeting these criteria are available in %s:" : "Группы, отвечающие этим критериям доступны в %s:",
    "Only these object classes:" : "Только эти классы объектов:",
    "Only from these groups:" : "Только из этих групп:",
    "Search groups" : "Поиск групп",
    "Available groups" : "Доступные группы",
    "Selected groups" : "Выбранные группы",
    "Edit LDAP Query" : "Изменить запрос LDAP",
    "LDAP Filter:" : "Фильтр LDAP:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "Этот фильтр определяет какие LDAP группы должны иметь доступ к экземпляру %s.",
    "Verify settings and count the groups" : "Проверить настройки и пересчитать группы",
    "When logging in, %s will find the user based on the following attributes:" : "При входе, %s будет искать пользователя по следующим атрибутам:",
    "LDAP / AD Username:" : "Имя пользователя LDAP/AD:",
    "Allows login against the LDAP / AD username, which is either \"uid\" or \"sAMAccountName\" and will be detected." : "Позволяет вход в LDAP / AD с помощью имени пользователя, которое может определяться как «uid», так и «sAMAccountName».",
    "LDAP / AD Email Address:" : "Адрес email LDAP / AD:",
    "Allows login against an email attribute. \"mail\" and \"mailPrimaryAddress\" allowed." : "Позволяет вход с помощью адреса email. Разрешены аттрибуты «mail» и «mailPrimaryAddress».",
    "Other Attributes:" : "Другие атрибуты:",
    "Defines the filter to apply, when login is attempted. \"%%uid\" replaces the username in the login action. Example: \"uid=%%uid\"" : "Определяет фильтр для применения при попытке входа.  «%% uid» заменяет имя пользователя для входа в систему. Например: \"uid=%%uid\"",
    "Test Loginname" : "Проверить логин",
    "Verify settings" : "Проверить настройки",
    "%s. Server:" : "Сервер %s:",
    "Add a new configuration" : "Добавить новую конфигурацию",
    "Copy current configuration into new directory binding" : "Копировать текущую конфигурацию в новую связь с каталогом",
    "Delete the current configuration" : "Удалить текущую конфигурацию",
    "Host" : "Сервер",
    "You can omit the protocol, unless you require SSL. If so, start with ldaps://" : "Можно пренебречь протоколом, только если не требуется использование SSL. В этом случае укажите ldaps://",
    "Port" : "Порт",
    "Detect Port" : "Определить порт",
    "User DN" : "DN пользователя",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "DN пользователя, под которым выполняется подключение, например, uid=agent,dc=example,dc=com. Для анонимного доступа оставьте DN и пароль пустыми.",
    "Password" : "Пароль",
    "For anonymous access, leave DN and Password empty." : "Для анонимного доступа оставьте DN и пароль пустыми.",
    "Save Credentials" : "Сохранить учётные данные",
    "One Base DN per line" : "По одной базе поиска (Base DN) в строке.",
    "You can specify Base DN for users and groups in the Advanced tab" : "Вы можете задать Base DN для пользователей и групп на вкладке \"Расширенные\"",
    "Detect Base DN" : "Определить базу поиска DN",
    "Test Base DN" : "Проверить базу поиска DN",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "Избегает отправки автоматических запросов LDAP. Эта опция подходит для крупных проектов, но требует некоторых знаний LDAP.",
    "Manually enter LDAP filters (recommended for large directories)" : "Ввести LDAP фильтры вручную (рекомендуется для больших каталогов)",
    "Listing and searching for users is constrained by these criteria:" : "Слушаются и ищутся пользователи, ограниченные этими критериями:",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "Наиболее частые классы объектов для пользователей organizationalPerson, person, user и inetOrgPerson. Если вы не уверены какой класс объектов выбрать, пожалуйста обратитесь к администратору.",
    "The filter specifies which LDAP users shall have access to the %s instance." : "Этот фильтр указывает, какие пользователи LDAP должны иметь доступ к экземпляру %s.",
    "Verify settings and count users" : "Проверить настройки и пересчитать пользователей",
    "Saving" : "Сохраняется",
    "Back" : "Назад",
    "Continue" : "Продолжить",
    "Please renew your password." : "Обновите свой пароль.",
    "An internal error occurred." : "Произошла внутренняя ошибка.",
    "Please try again or contact your administrator." : "Попробуйте ещё раз или свяжитесь с вашим администратором.",
    "Current password" : "Текущий пароль",
    "New password" : "Новый пароль",
    "Renew password" : "Обновление пароля",
    "Wrong password." : "Неправильный пароль.",
    "Cancel" : "Отмена",
    "Server" : "Сервер",
    "Users" : "Пользователи",
    "Login Attributes" : "Учетные данные",
    "Groups" : "Группы",
    "Expert" : "Эксперт",
    "Advanced" : "Дополнительно",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Предупреждение:</b> Модуль LDAP для PHP не установлен, бэкенд не будет работать. Пожалуйста, попросите вашего системного администратора его установить. ",
    "Connection Settings" : "Настройки подключения",
    "Configuration Active" : "Конфигурация активна",
    "When unchecked, this configuration will be skipped." : "Когда галочка снята, эта конфигурация будет пропущена.",
    "Backup (Replica) Host" : "Адрес резервного сервера",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Укажите дополнительный резервный сервер. Он должен быть репликой главного LDAP/AD сервера.",
    "Backup (Replica) Port" : "Порт резервного сервера",
    "Disable Main Server" : "Отключить главный сервер",
    "Only connect to the replica server." : "Подключаться только к резервному серверу",
    "Turn off SSL certificate validation." : "Отключить проверку сертификата SSL.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "Не рекомендуется, используйте только в режиме тестирования! Если соединение работает только с этой опцией, импортируйте на ваш сервер %s SSL-сертификат сервера LDAP.",
    "Cache Time-To-Live" : "Время хранения кэша (TTL)",
    "in seconds. A change empties the cache." : "в секундах. Изменение очистит кэш.",
    "Directory Settings" : "Настройки каталога",
    "User Display Name Field" : "Поле отображаемого имени пользователя",
    "The LDAP attribute to use to generate the user's display name." : "Атрибут LDAP, который используется для генерации отображаемого имени пользователя.",
    "2nd User Display Name Field" : "Вторичное поле отображаемого имени пользователя",
    "Optional. An LDAP attribute to be added to the display name in brackets. Results in e.g. »John Doe (john.doe@example.org)«." : "Не обязательно. Атрибут LDAP, который будет добавляться к отображаемому имени в скобках. Например, »John Doe (john.doe@example.org)«.",
    "Base User Tree" : "База дерева пользователей",
    "One User Base DN per line" : "По одной базовому DN пользователей в строке.",
    "User Search Attributes" : "Атрибуты поиска пользователей",
    "Optional; one attribute per line" : "Опционально; один атрибут в строке",
    "Group Display Name Field" : "Поле отображаемого имени группы",
    "The LDAP attribute to use to generate the groups's display name." : "Атрибут LDAP, который используется для генерации отображаемого имени группы.",
    "Base Group Tree" : "База дерева групп",
    "One Group Base DN per line" : "По одной базовому DN групп в строке.",
    "Group Search Attributes" : "Атрибуты поиска групп",
    "Group-Member association" : "Ассоциация Группа-Участник",
    "Dynamic Group Member URL" : "URL участников динамической группы",
    "The LDAP attribute that on group objects contains an LDAP search URL that determines what objects belong to the group. (An empty setting disables dynamic group membership functionality.)" : "Атрибут LDAP для объектов группы, который определяет по какому URL ведется поиск принадлежности к группе. (Пустое значение отключает функциональность динамического участия в группах).",
    "Nested Groups" : "Вложенные группы",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "При включении, активируется поддержка групп, содержащих другие группы. (Работает только если атрибут член группы содержит DN.)",
    "Paging chunksize" : "Страничный размер блоков",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "ChunkSize используется в страничных поисках LDAP которые могут возвращать громоздкие результаты, как например списки пользователей или групп. (Установка значения в \"0\" отключает страничный поиск LDAP для таких ситуаций.)",
    "Enable LDAP password changes per user" : "Позволить пользователю изменять пароль LDAP",
    "Allow LDAP users to change their password and allow Super Administrators and Group Administrators to change the password of their LDAP users. Only works when access control policies are configured accordingly on the LDAP server. As passwords are sent in plaintext to the LDAP server, transport encryption must be used and password hashing should be configured on the LDAP server." : "Позволить пользователям менять свои пароли LDAP и позволить Супер Администраторам и Администраторам Групп менять пароли своих пользователей LDAP. Работает только в случае, когда политики управления доступом настроены соответствующим образом на сервере LDAP. Поскольку пароли пересылаются простым текстом на сервер LDAP,  необходимо использовать шифрование канала передачи и хеширование паролей на сервере LDAP.",
    "(New password is sent as plain text to LDAP)" : "(Новый пароль отправлен в LDAP простым текстом)",
    "Default password policy DN" : "Политики DN пароля по умолчанию",
    "The DN of a default password policy that will be used for password expiry handling. Works only when LDAP password changes per user are enabled and is only supported by OpenLDAP. Leave empty to disable password expiry handling." : "Политики DN пароля по умолчанию, которая будет использоваться для обработки истечения срока действия пароля. Работает только тогда, когда включены изменения пароля LDAP для каждого пользователя и поддерживается только OpenLDAP. Оставьте пустым, чтобы отключить обработку истечения срока действия пароля.",
    "Special Attributes" : "Специальные атрибуты",
    "Quota Field" : "Поле квоты",
    "Leave empty for user's default quota. Otherwise, specify an LDAP/AD attribute." : "Оставьте пустым для использования квоты по умолчанию. Иначе укажите атрибут LDAP/AD.",
    "Quota Default" : "Квота по умолчанию",
    "Override default quota for LDAP users who do not have a quota set in the Quota Field." : "Переопределить стандартную квоту для пользователей LDAP, у которых не указано значение в поле «Квота».",
    "Email Field" : "Поле адреса email",
    "Set the user's email from their LDAP attribute. Leave it empty for default behaviour." : "Устанавливать адрес email пользователя из атрибута LDAP. Оставьте поле пустым для поведения по умолчанию.",
    "User Home Folder Naming Rule" : "Правило именования домашнего каталога пользователя",
    "Leave empty for user name (default). Otherwise, specify an LDAP/AD attribute." : "Оставьте пустым для использования имени пользователя (по умолчанию). Иначе укажите атрибут LDAP/AD.",
    "Internal Username" : "Внутреннее имя пользователя",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [ a-zA-Z0-9_.@- ].  Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all *DAV services. With this setting, the default behavior can be overridden. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users." : "По умолчанию внутреннее имя пользователя будет создано из атрибута UUID. Это даёт гарантию того, что имя пользователя уникально и символы не нужно конвертировать. Внутреннее имя пользователя имеет ограничение на то, что только эти символы допустимы: [ a-zA-Z0-9_.@- ]. Другие символы замещаются их корреспондирующими символами ASCII или же просто отбрасываются. При коллизиях добавляется или увеличивается номер. Внутреннее имя пользователя используется для идентификации пользователя внутри системы. Также это по умолчанию имя для домашней папки пользователя. Также это часть адресов URL, например для всех служб *DAV. С помощью этой установки, поведение по умолчанию может быть изменено. Оставьте его пустым для поведения по умолчанию. Изменения будут иметь эффект только для вновь спроецированных (добавленных) пользователей LDAP. ",
    "Internal Username Attribute:" : "Атрибут для внутреннего имени:",
    "Override UUID detection" : "Переопределить нахождение UUID",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "По умолчанию ownCloud определяет атрибут UUID автоматически. Этот атрибут используется для того, чтобы достоверно идентифицировать пользователей и группы LDAP. Также на основании атрибута UUID создается внутреннее имя пользователя, если выше не указано иначе. Вы можете переопределить эту настройку и указать свой атрибут по выбору. Вы должны удостовериться, что выбранный вами атрибут может быть выбран для пользователей и групп, а также то, что он уникальный. Оставьте поле пустым для поведения по умолчанию. Изменения вступят в силу только для новых подключенных (добавленных) пользователей и групп LDAP.",
    "UUID Attribute for Users:" : "UUID-атрибуты для пользователей:",
    "UUID Attribute for Groups:" : "UUID-атрибуты для групп:",
    "Username-LDAP User Mapping" : "Соответствия Имя-Пользователь LDAP",
    "Usernames are used to store and assign metadata. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "Имена пользователей используются для хранения и назначения метаданных. Для точной идентификации и распознавания пользователей, каждый пользователь LDAP будет иметь свое внутреннее имя пользователя. Это требует привязки имени пользователя к пользователю LDAP. При создании имя пользователя назначается идентификатору UUID пользователя LDAP. Помимо этого кешируется DN для уменьшения числа обращений к LDAP, однако он не используется для идентификации. Если DN был изменён, то изменения будут найдены. Внутреннее имя используется повсеместно. После сброса привязок в базе могут сохраниться остатки старой информации. Сброс привязок не привязан к конфигурации, он повлияет на все LDAP подключения! Ни в коем случае не рекомендуется сбрасывать привязки если система уже находится в эксплуатации, только на этапе тестирования.",
    "Clear Username-LDAP User Mapping" : "Очистить соответствия Имя-Пользователь LDAP",
    "Clear Groupname-LDAP Group Mapping" : "Очистить соответствия Группа-Группа LDAP",
    " entries available within the provided Base DN" : "элементов доступно в предоставленном базовом DN",
    "Usernames are used to store and assign (meta) data. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "ownCloud использует имена пользователей для хранения и назначения метаданных. Для точной идентификации и распознавания пользователей, каждый пользователь LDAP будет иметь свое внутреннее имя пользователя. Это требует привязки имени пользователя ownCloud к пользователю LDAP. При создании имя пользователя назначается идентификатору UUID пользователя LDAP. Помимо этого кешируется DN для уменьшения числа обращений к LDAP, однако он не используется для идентификации. Если DN был изменён, то изменения будут найдены. Внутреннее имя ownCloud используется повсеместно в ownCloud. После сброса привязок в базе могут сохраниться остатки старой информации. Сброс привязок не привязан к конфигурации, он повлияет на все LDAP подключения! Ни в коем случае не рекомендуется сбрасывать привязки если система уже находится в эксплуатации, только на этапе тестирования."
},
"nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);");
