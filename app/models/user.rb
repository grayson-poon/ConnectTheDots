class User < ApplicationRecord
  attr_reader :password
  
  validates :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, :first_name, :last_name, :current_location, :headline, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token
  
  has_many :posts, dependent: :destroy
  has_one_attached :photo

  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email)

    if @user && @user.is_correct_password?(password)
      return @user
    else
      return nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_correct_password?(password)
    bcrypt_object = BCrypt::Password.new(self.password_digest)
    return bcrypt_object.is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    return self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  private

  def ensure_user_photo
    if !self.photo
      self.photo.attach(io: File.open('/'))
    end
  end

end
